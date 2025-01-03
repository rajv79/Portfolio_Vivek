import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { BsChevronDoubleDown } from "react-icons/bs"; // Import the chevron icon

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Vivek Raj</span>, a passionate technologist and innovator staying in <span className="purple">New York State, USA</span>.
          </p>
          
          <p style={{ textAlign: "justify" }}>
            Currently, I'm on an exciting journey pursuing my <span className="purple">Master of Science in Computer Science</span>, with a laser focus on the cutting-edge <span className="purple">Artificial Intelligence (AI) Track</span> at <span className="purple">Binghamton University, NY</span>. My academic pursuits are driven by an insatiable curiosity and a desire to push the boundaries of what's possible in the realm of technology.
          </p>

          <p style={{ textAlign: "justify" }}>
            Through my studies, I've developed a deep expertise in <span className="purple">Artificial Intelligence</span>, with a curriculum that emphasizes cutting-edge technologies and practical problem-solving. My technical arsenal includes <span className="purple">Python, C++, and Java</span>, complemented by tools like <span className="purple">TensorFlow, YOLO, Paddle OCR, Git</span>, and cloud platforms such as <span className="purple">AWS</span>.
          </p>

          <p style={{ textAlign: "justify" }}>
            My journey has been enriched by diverse projects, including:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing real-time text recognition systems with YOLO and Paddle OCR
            </li>
            <li className="about-activity">
              <ImPointRight /> Implementing sophisticated machine learning models
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the realms of computer vision and natural language processing
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            These experiences have equipped me with a solid foundation in <span className="purple">AI development, software engineering, and systems design</span>. I'm enthusiastic about contributing to roles at the intersection of AI, machine learning, and software development, driven by a passion for innovation and tackling complex challenges.
          </p>

          <p style={{ textAlign: "justify" }}>
            My fascination with technology stems from its power to bring about meaningful change. This passion has led me to dive deep into various areas of computer science, including:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Artificial Intelligence</span> and <span className="purple">Machine Learning</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Deep Learning</span> and Neural Networks
            </li>
            <li className="about-activity">
              <ImPointRight /> Full-stack Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Structures and Algorithms
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Beyond the classroom, I thrive in competitive environments, as evidenced by my achievements in various hackathons:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Winner</strong> - <span className="purple">Best Technical Hack</span> at <b>HackBU 2024</b>
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Second Place</strong> at <span className="purple">QubitX Hacks by YCW</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Active participant in <span className="purple">CodeEDU: SpringHacks 2024</span> and <span className="purple">Tri Valley Summer Long Hackathon</span>
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            I'm particularly excited about leveraging tools like <span className="purple">PyTorch</span> and <span className="purple">TensorFlow</span> to develop innovative solutions that address real-world challenges. My goal is to create systems that make a tangible impact on the world around us.
          </p>

          <p style={{ textAlign: "justify" }}>
            When I'm not immersed in code or brainstorming the next big tech idea, you can find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Scoring runs on the cricket field or goals on the soccer pitch
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring emerging technologies and their potential applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Embarking on adventures to experience diverse cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Unwinding with my favorite anime series
            </li>
          </ul>

          {/* Inspirational Quote */}
          <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "In the realm of technology, every challenge is an opportunity to innovate and make a difference."
          </p>

          {/* Footer */}
          <footer className="blockquote-footer">Vivek Raj</footer>
        </blockquote>

        {/* Sticky scroll indicator */}
        <div style={{
          position: "sticky",
          bottom: "10px",
          textAlign: "center"
        }}>
          {/* Chevron icon with customized color */}
          <BsChevronDoubleDown size={30} style={{ color: 'gold' }} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
