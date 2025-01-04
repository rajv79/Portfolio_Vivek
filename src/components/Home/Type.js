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
          deleteSpeed: 10, // Faster deletion
          delay: 50, // Faster typing
          pauseFor: 800, // Shorter pause between strings
          cursor: "|", // Custom cursor
        }}
      />
    </div>
  );
}

export default Type;
