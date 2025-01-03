import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "AI Engineer",
            "Software Developer",
            "Machine Learning Engineer",
            "Teaching Assistant",
            "Hackathon Winner",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75, // Typing speed
          cursor: "|", // Custom cursor
        }}
      />
    </div>
  );
}

export default Type;
