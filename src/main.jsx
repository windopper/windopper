import React from "react";
import { generateSvg } from "./render";
import Kamilereon from "./kamilereon";
import Takeoff from "./takeoff";

async function main() {
  await generateSvg(<Title darkMode>✨ Toy Project</Title>, "darkToyProject");

  await generateSvg(<Title darkMode>⚡ Preferred Tech</Title>, "darkFavoriteTech");

  await generateSvg(<Title darkMode>💻 Coding Activity</Title>, "darkCodingActivity");

  await generateSvg(<Title darkMode>💡 Algorithm Problem Solving</Title>, "darkAlgorithmProblemSolving");

  await generateSvg(<Title>✨ Toy Project</Title>, "toyProject");
  await generateSvg(<Title>⚡ Preferred Tech</Title>, "favoriteTech");
  await generateSvg(<Title>💻 Coding Activity</Title>, "codingActivity");
  await generateSvg(
    <Title>💡 Algorithm Problem Solving</Title>,
    "algorithmProblemSolving"
  );

  await generateSvg(<Kamilereon />, "kamilereon", 
    { width: 600, height: 60 });

  await generateSvg(<Takeoff />, "takeoff", 
    { width: 600, height: 60 });
}

function Title({ children, darkMode = false }) {
  return (
    <div
      style={{
        position: "relative",
        color: darkMode ? "white" : "black",
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
