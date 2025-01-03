import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaAward } from "react-icons/fa";

// Importing award images
import BU1 from "../../Assets/BU1.png";
import Hackbu from "../../Assets/Hackbu.png";
import MCL1 from "../../Assets/MCL1.jpg";
import NSF1 from "../../Assets/NSF_1.png";
import phk1 from "../../Assets/phk1.png";
import ycw from "../../Assets/ycw.png";

function HonorsAwards() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="honors-awards-section">
        <h1 className="project-heading">
          <strong className="purple">Honors & Awards</strong>
        </h1>
        <div className="timeline">
          {/* Honors & Awards 1 - Magna Cum Laude */}
          <div className="timeline-item">
            <Row>
              <Col md={2} className="award-image-wrapper">
                <div style={{ position: "relative" }}>
                  <img src={MCL1} alt="Magna Cum Laude" className="award-image" />
                  <FaAward style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1, fontSize: "24px", color: "gold" }} />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="timeline-title">Bachelor's Degree in Computer Science</h3>
                <p>Graduated Magna Cum Laude, recognized for academic excellence and exceptional performance in the field of Computer Science.</p>
              </Col>
            </Row>
            <hr className="timeline-divider" />
          </div>

          {/* Honors & Awards 2 */}
          <div className="timeline-item">
            <Row>
              <Col md={2} className="award-image-wrapper">
                <div style={{ position: "relative" }}>
                  <img src={BU1} alt="Dean's List" className="award-image" />
                  <FaAward style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1, fontSize: "24px", color: "gold" }} />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="timeline-title">Dean's List</h3>
                <p><strong>Binghamton University</strong></p>
                <p>Earned Dean's List status for achieving a high GPA of more than 3.5 throughout the academic year.</p>
              </Col>
            </Row>
            <hr className="timeline-divider" />
          </div>

          {/* Honors & Awards 3 */}
          <div className="timeline-item">
            <Row>
              <Col md={2} className="award-image-wrapper">
                <div style={{ position: "relative" }}>
                  <img src={phk1} alt="Phi Theta Kappa Scholarship" className="award-image" />
                  <FaAward style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1, fontSize: "24px", color: "gold" }} />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="timeline-title">Phi Theta Kappa Scholarship</h3>
                <p>Selected as a recipient for a scholarship as a result of excelling in all math courses.</p>
              </Col>
            </Row>
            <hr className="timeline-divider" />
          </div>

          {/* Honors & Awards 4 */}
          <div className="timeline-item">
            <Row>
              <Col md={2} className="award-image-wrapper">
                <div style={{ position: "relative" }}>
                  <img src={NSF1} alt="NSF STEM Scholarship" className="award-image" />
                  <FaAward style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1, fontSize: "24px", color: "gold" }} />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="timeline-title">NSF – STEM Scholarship</h3>
                <p>Awarded for achieving a cumulative GPA of 3.5 and above, supported by the National Science Foundation.</p>
              </Col>
            </Row>
            <hr className="timeline-divider" />
          </div>

          {/* Honors & Awards 5 */}
          <div className="timeline-item">
            <Row>
              <Col md={2} className="award-image-wrapper">
                <div style={{ position: "relative" }}>
                  <img src={Hackbu} alt="Best Technical Hack" className="award-image" />
                  <FaAward style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1, fontSize: "24px", color: "gold" }} />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="timeline-title">Winner - Best Technical Hack</h3>
                <p>Recognized for outstanding performance at HackBU, winning the award for the best technical hack.</p>
              </Col>
            </Row>
            <hr className="timeline-divider" />
          </div>

          {/* Honors & Awards 6 */}
          <div className="timeline-item">
            <Row>
              <Col md={2} className="award-image-wrapper">
                <div style={{ position: "relative" }}>
                  <img src={ycw} alt="QubitX Hacks" className="award-image" />
                  <FaAward style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1, fontSize: "24px", color: "gold" }} />
                </div>
              </Col>
              <Col md={10}>
                <h3 className="timeline-title">Second Place - QubitX Hacks</h3>
                <p>Secured second place at the prestigious QubitX Hacks, hosted by YCW.</p>
              </Col>
            </Row>
            <hr className="timeline-divider" />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default HonorsAwards;
