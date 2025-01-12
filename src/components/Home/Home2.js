import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myImg1 from "../../Assets/s1.png";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple">INTRODUCE</span> MYSELF
              </h1>
              <p className="home-about-body">
                Hi! I'm <span className="purple">Vivek Raj</span>, a computer science enthusiast with a passion for <b className="purple">AI and Machine Learning</b>. I thrive on solving challenging problems and creating innovative solutions.
                <br />
                <br />
                I have a strong foundation in programming languages like <i><b className="purple">Python, C++, and Java</b></i>, and I've applied these skills to projects in <i><b className="purple">Machine Learning, Deep Learning,</b></i> and <b className="purple">Neural Networks</b>.
                <br />
                <br />
                A highlight of my journey was winning the <b className="purple">HackBU 2024 Hackathon for Best Technology</b>, where I developed a real-time gesture recognition system. My enthusiasm for creativity was sparked by this opportunity.
                <br />
                <br />
                I’m eager to collaborate on exciting projects and continuously learn. Let’s connect and create something amazing together!
              </p>
            </Col>

            <Col md={4} className="myAvtar">
  <div className="flip-container">
    <div className="flipper">
      {/* Front Image */}
      <div className="front">
        <Tilt>
          <img
            src={myImg1} // Replace with your front image
            style={{ width: "300px", height: "300px" }}
            className="img-fluid floating-image"
            alt="avatar"
          />
        </Tilt>
      </div>

      {/* Back Image */}
      <div className="back">
        <Tilt>
          <img
            src={myImg} // Replace with your back image
            style={{ width: "300px", height: "300px" }}
            className="img-fluid floating-image"
            alt="avatar-back"
          />
        </Tilt>
      </div>
    </div>
  </div>
</Col>



          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect</span> with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/rajv79"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/vivek-raj07/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/vivek_raj"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/vivek_raj"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home2;
