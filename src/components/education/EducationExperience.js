import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function EducationExperience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="education-experience-section">
        <h1 className="project-heading">
          <strong className="purple">Education</strong>
        </h1>
        <div className="timeline">
          {/* Education */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Master of Science in Computer Science</h3>
              <p className="timeline-organization"><strong>Binghamton University, NY</strong> | Jan 2024 - May 2025</p>
              <p>Specialized in Artificial Intelligence, GPA: 4.0.</p>
            </div>
            <hr className="timeline-divider" />
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Bachelor of Science in Computer Science</h3>
              <p className="timeline-organization"><strong>Binghamton University, NY</strong> | Aug 2021 - Dec 2023</p>
              <p>Graduated with a GPA of 3.8, Dean's List.</p>
            </div>
            <hr className="timeline-divider" />
          </div>
        </div>

        <h1 className="project-heading">
          <strong className="purple">Professional Experience</strong>
        </h1>
        <div className="timeline">
          {/* Professional Experience */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Teaching Assistant</h3>
              <p className="timeline-organization"><strong>Binghamton University, NY</strong> | Aug 2024 - Present</p>
              <p>Guided students in Computer Security and provided feedback on assignments.</p>
            </div>
            <hr className="timeline-divider" />
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Research Assistant</h3>
              <p className="timeline-organization"><strong>Binghamton University, NY</strong> | Feb 2024 - May 2024</p>
              <p>Worked on prompt engineering to optimize AI responses and tested models for enhanced accuracy.</p>
            </div>
            <hr className="timeline-divider" />
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Software Engineering Virtual Experience</h3>
              <p className="timeline-organization"><strong>JPMorgan Chase & Co.</strong> | July 2023</p>
              <p>Completed a virtual program that involved hands-on experience with software engineering workflows and projects.</p>
            </div>
            <hr className="timeline-divider" />
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Cybersecurity Virtual Experience Program</h3>
              <p className="timeline-organization"><strong>JPMorgan Chase & Co.</strong> | June 2023</p>
              <p>Gained exposure to cybersecurity principles and applied them to practical, simulated scenarios.</p>
            </div>
            <hr className="timeline-divider" />
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Software Intern</h3>
              <p className="timeline-organization"><strong>Central Hudson Gas and Electric Corp, NY</strong> | Jun 2022 - Aug 2022</p>
              <p>Enhanced SAP system integration and improved performance through CDS views and ABAP programming.</p>
            </div>
            <hr className="timeline-divider" />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default EducationExperience;
