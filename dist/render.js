import React from 'react';
import satori from 'satori';
import fs from 'fs';
export async function generateSvg(element, outputName, options = {}) {
  const font = fs.readFileSync('./SeoulAlrimTTF-Heavy.ttf');
  const svg = await satori(element, {
    width: options.width,
    height: options.height,
    fonts: [{
      name: "SeoulAlrimTTF-Heavy",
      data: font,
      weight: 900,
      style: "normal"
    }],
    loadAdditionalAsset: async (code, segment) => {
      if (code === "emoji") {
        const codePoint = segment.codePointAt(0).toString(16);
        try {
          // Twemoji SVG API를 사용하여 이모지 가져오기
          const response = await fetch(`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg`);
          if (response.ok) {
            const svgText = await response.text();
            return `data:image/svg+xml;base64,${Buffer.from(svgText).toString('base64')}`;
          }
        } catch (error) {
          console.warn(`Failed to load emoji ${segment}:`, error);
        }
        return `data:image/svg+xml;base64,${Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" fill="#ccc"/><text x="36" y="45" text-anchor="middle" font-size="20">?</text></svg>').toString('base64')}`;
      }
      return undefined;
    }
  });
  fs.writeFileSync(`./resources/${outputName}.svg`, svg);
  return svg;
}