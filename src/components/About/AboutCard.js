import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Vivek Raj</span> from{" "}
            <span className="purple">Delhi, India</span>. 
            <br />I am currently pursuing my <span className="purple">Master of Science</span> 
            in Computer Science, specializing in the{" "}
            <span className="purple">Artificial Intelligence (AI) Track</span>, 
            at <span className="purple">Binghamton University, NY</span>. 
            My academic journey has been marked by a <span className="purple">stellar GPA</span> 
            and a deep passion for learning.
            <br />
            <br />
            Previously, I completed my <span className="purple">Bachelor of Science</span> 
            in Computer Science with excellent results, reflecting my commitment 
            to both academics and practical problem-solving.
            <br />
            <br />
            Beyond the classroom, I have participated in several hackathons, achieving notable success:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Winner</strong> - <span className="purple">Best Technical Hack</span> at <b>HackBU 2024</b>
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Second Place</strong> at <span className="purple">QubitX Hacks by YCW</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Participant at <span className="purple">CodeEDU: SpringHacks 2024</span> 
              and <span className="purple">Tri Valley Summer Long Hackathon</span>
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            My interests are centered on <span className="purple">Artificial Intelligence</span>,{" "}
            <span className="purple">Machine Learning</span>, and{" "}
            <span className="purple">Deep Learning</span>. I enjoy solving real-world challenges 
            by leveraging tools like <span className="purple">PyTorch</span> and{" "}
            <span className="purple">TensorFlow</span> to develop innovative solutions.
          </p>

          <p style={{ textAlign: "justify" }}>
            When I’m not coding, I love to:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Cricket and Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel and Experience Different Cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "Strive to build systems that make a meaningful impact on the world!"{" "}
          </p>
          <footer className="blockquote-footer">Vivek Raj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
