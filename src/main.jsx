import React from "react";
import { generateSvg } from "./render";
import Kamilereon from "./kamilereon";
import Takeoff from "./takeoff";

async function main() {
  await generateSvg(<Title>✨ 토이 프로젝트</Title>, "toyProject");

  await generateSvg(<Title>⚡ 선호 기술</Title>, "favoriteTech");

  await generateSvg(<Title>💻 코딩 활동</Title>, "codingActivity");

  await generateSvg(<Title>💡 알고리즘 문제 풀이</Title>, "algorithmProblemSolving");

  await generateSvg(<Kamilereon />, "kamilereon", 
    { width: 600, height: 60 });

  await generateSvg(<Takeoff />, "takeoff", 
    { width: 600, height: 60 });
}

function Title({ children }) {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        fontSize: "24px",
        fontFamily: "SeoulAlrimTTF-Heavy",
        padding: "5px 0px",
      }}
    >
      {children}
    </div>
  );
}

main();
