import React from "react";
import { generateSvg } from "./render.js";
import Kamilereon from "./kamilereon.js";
import Takeoff from "./takeoff.js";
async function main() {
  await generateSvg(/*#__PURE__*/React.createElement("div", null, "\u2728 \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4"), "test");
  await generateSvg(/*#__PURE__*/React.createElement(Title, {
    darkMode: true
  }, "\u2728 Toy Project"), "darkToyProject");
  await generateSvg(/*#__PURE__*/React.createElement(Title, {
    darkMode: true
  }, "\u26A1 Preferred Tech"), "darkFavoriteTech");
  await generateSvg(/*#__PURE__*/React.createElement(Title, {
    darkMode: true
  }, "\uD83D\uDCBB Coding Activity"), "darkCodingActivity");
  await generateSvg(/*#__PURE__*/React.createElement(Title, {
    darkMode: true
  }, "\uD83D\uDCA1 Algorithm Problem Solving"), "darkAlgorithmProblemSolving");
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\u2728 Toy Project"), "toyProject");
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\u26A1 Preferred Tech"), "favoriteTech");
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\uD83D\uDCBB Coding Activity"), "codingActivity");
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\uD83D\uDCA1 Algorithm Problem Solving"), "algorithmProblemSolving");
  await generateSvg(/*#__PURE__*/React.createElement(Kamilereon, null), "kamilereon", {
    width: 600,
    height: 60
  });
  await generateSvg(/*#__PURE__*/React.createElement(Takeoff, null), "takeoff", {
    width: 600,
    height: 60
  });
}
function Title({
  children,
  darkMode = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      color: darkMode ? "white" : "black",
      display: "flex",
      fontSize: "24px",
      fontFamily: "SeoulAlrimTTF-Heavy",
      padding: "5px 0px"
    }
  }, children);
}
main();