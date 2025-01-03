import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Hi! I'm Vivek Raj, a computer science enthusiast with a strong
                passion for <b className="purple">AI and Machine Learning</b>. I
                enjoy diving into challenging problems and creating practical,
                efficient solutions that make a difference.
                <br />
                <br />
                Over the years, I’ve built a solid foundation in programming
                with{" "}
                <i>
                  <b className="purple">Python, C++, and Java</b>
                </i>
                , and I've applied these skills to exciting projects in{" "}
                <i>
                  <b className="purple">Machine Learning, Deep Learning,</b>
                </i>{" "}
                and <b className="purple">Neural Networks</b>.
                <br />
                <br />
                One of the highlights of my journey was winning the{" "}
                <b className="purple">
                  HackBU 2024 Hackathon for Best Technology
                </b>
                , where I developed a real-time gesture recognition system. It
                was an incredible experience and a testament to my love for
                innovation.
                <br />
                <br />
                I’ve also worked on projects like building{" "}
                <b className="purple">custom memory managers</b> and creating
                systems that leverage
                <i>
                  <b className="purple">
                    {" "}
                    PyTorch, TensorFlow, and Scikit-Learn
                  </b>
                </i>{" "}
                to solve real-world problems.
                <br />
                <br />
                I’m always looking for opportunities to collaborate on exciting
                projects and learn new things. Let’s connect and create
                something amazing together!
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                {/* Added the floating-image class here */}
                <img
                  src={myImg}
                  className="img-fluid floating-image"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/rajv79"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/vivek-raj07/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/vivek_raj" // Placeholder for your Twitter profile
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/vivek_raj" // Placeholder for your Instagram profile
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
