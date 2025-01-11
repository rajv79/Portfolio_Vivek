import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import MM1 from "../../Assets/Projects/MM1.png";
import MR2 from  "../../Assets/Projects/MR2.png";
import STM1 from "../../Assets/Projects/STM1.png";
import Moana2 from "../../Assets/Projects/Moana2.png";
import NL1 from "../../Assets/Projects/NL1.png"
import LLM_images from "../../Assets/Projects/LLM_images.png"
import AM2 from "../../Assets/Projects/AM2.png"
import LLM2 from "../../Assets/Projects/LLM2.png"
import my_port from "../../Assets/Projects/my_port.png"




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MM1}
              isBlog={false}
              title="Custom Memory Management C++"
              description="Developed a custom memory manager with 8-byte alignment and efficient slot tracking using bitmap and linked-list structures, reducing kernel-space switches by 30%. Achieved 90% reduction in memory leaks and double frees, while enabling 4x larger allocations with dynamic batch expansion, improving program throughput by 20%."
              ghLink="https://github.com/rajv79/Custom_memory_mangement"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AM2}
              isBlog={false}
              title="Air Mouse"
              description="Air Mouse is an innovative human-computer interaction device that leverages a computer’s camera to interpret hand gestures and control the user interface.Our team was inspired by the intuitive gesture recognition technology found in Apple Pro Vision, Meta Quest, and various VR headsets. We aimed to bring this natural interaction to everyday computing."
              ghLink="https://github.com/rajv79/AirMouse"
              demoLink="https://devpost.com/software/air-mouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={STM1}
              isBlog={false}
              title="Stock Market Prediction"
              description="This stock trading and forecasting program is designed to help users maximize their profits by making intelligent buying and selling decisions. It leverages advanced machine learning techniques and robust data analysis to provide accurate predictions and actionable insights for trading.

Written in Python, the program utilizes powerful libraries such as scikit-learn, pandas, numpy, and PyTorch to efficiently handle data manipulation, analysis, and predictive modeling. Whether you're a seasoned trader or just starting out, this tool is built to simplify market complexities and enhance your trading strategies."
              ghLink="https://github.com/rajv79/Stock_Market_Prediction"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Moana2}
              isBlog={false}
              title="NeoVision"
              description="NeoVision is a cutting-edge Android application combining real-time handwriting recognition, object detection, and multilingual text processing. Using PaddleOCR, YOLO, and Google API, it identifies handwritten and printed text in multiple languages while detecting objects like packages, signs, or labels. With seamless integration of OpenCV for preprocessing and live confidence score displays, NeoVision delivers fast and accurate results for tasks like note-taking, document digitization, and accessibility tools, making it a versatile and powerful AI-driven solution."
              ghLink="https://github.com/rajv79/NeoVision"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MR2}
              isBlog={false}
              title="Concurrent Text Analyzer"
              description="ConcurrentTextAnalyzer is a multithreaded map-reduce framework written in C, designed for efficient processing of large text files by leveraging parallel computing. It divides files into smaller segments and assigns them to worker threads, which independently process the data in parallel during the map phase. The results are then aggregated in the reduce phase to generate the final analysis. This approach significantly reduces processing time and enhances performance, making it ideal for tasks like word frequency analysis, log processing, and other large-scale text analysis applications"
              ghLink="https://github.com/rajv79/ConcurrentTextAnalyzer-Map-Reduce-for-Text-Processing-"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LLM_images}
              isBlog={false}
              title="Analyzing Trends and Toxicity in Online Tech and Movie Discussions"
              description="This project analyzes discussion trends on Reddit, 4chan, and YouTube, focusing on movies and technology. Using the ModerateHatespeech API, it measures toxicity levels, detects hate speech, and categorizes content. An interactive dashboard powered by a Hugging Face LLM and MongoDB visualizes comment activity, toxicity, and engagement trends. The study identifies platforms shaping tech and movie consumption trends while assessing the quality of online discussions, offering actionable insights into social media’s influence on public discourse."
              ghLink="https://github.com/rajv79/Analyzing-Trends-and-Toxicity-in-Online-Tech-and-Movie-Discussions"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NL1}
              isBlog={false}
              title="Natural-Scenes-Image-Classification"
              description="This project aims to classify images of natural scenes into six categories: buildings, forests, glaciers, mountains, seas, and streets using a deep learning model based on the Inception TensorFlow transfer learning model from TensorFlow Hub. The Intel_image_classification dataset is used for training and evaluation"
              ghLink="https://github.com/rajv79/-Natural-Scenes-Image-Classification"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LLM2}
              isBlog={false}
              title="Adaptive Script"
              description="Developed a self-improving text generation system using BERT/GPT-3, improving content coherence, user engagement, and satisfaction. Enhanced text assembly for faster and more concise generation, achieving high sentiment analysis accuracy through personalized content delivery."
              ghLink="https://github.com/rajv79"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={my_port}
              isBlog={false}
              title="My Portfolio"
              description="Welcome to my portfolio! Explore my projects and skills in software development, AI, and design, showcasing innovative solutions and impactful work"
              ghLink="https://github.com/rajv79/Portfolio_Vivek"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
