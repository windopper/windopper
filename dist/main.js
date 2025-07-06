import React from "react";
import { generateSvg } from "./render.js";
import Kamilereon from "./kamilereon.js";
import Takeoff from "./takeoff.js";
async function main() {
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\u2728 \uD1A0\uC774 \uD504\uB85C\uC81D\uD2B8"), "toyProject");
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\u26A1 \uC120\uD638 \uAE30\uC220"), "favoriteTech");
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\uD83D\uDCBB \uCF54\uB529 \uD65C\uB3D9"), "codingActivity");
  await generateSvg(/*#__PURE__*/React.createElement(Title, null, "\uD83D\uDCA1 \uC54C\uACE0\uB9AC\uC998 \uBB38\uC81C \uD480\uC774"), "algorithmProblemSolving");
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
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "black",
      display: "flex",
      fontSize: "24px",
      fontFamily: "SeoulAlrimTTF-Heavy",
      padding: "5px 0px"
    }
  }, children);
}
main();