// Projects.js
import React from 'react';
import '../styles/project.css';

const Projects = () => {
  

  return (
    <section className="projects" id='projects'>
      <h2>Projects</h2>
      <h1 class = "projectHeader">___________ Some of my creations ___________</h1>
        <div class="card-container">
          <div class = "card">
            <div class = "card-content">
              <h3>Logistics & warehouse payment-invoice management system</h3>
              <p>A logistics-based warehouse management system at PSIT Solutions.
                Enabled with CRUD operations, the system maintains queue-based payment invoice management in minutes .</p>
              <a class="btn" href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>

          <div class = "card">
            <div class = "card-content">
              <h3>OCR based Image paragraph summarizer</h3>
              <p>A module which takes an input image of text to generate a summary using an image processing, OCR and
                frequency-based summarizing algorithm</p>
              <a class="btn" href="https://github.com/PrabhavKarve/OCR-based-image-paragraph-summarizer" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>

          <div class = "card">
            <div class = "card-content">
              <h3>Image Captioning Using LSTM and YOLO for Visually Impaired</h3>
              <p>A guidance system for the visually impaired which receives imagery input from the users and provides
descriptive captions of the surroundings. Published in Springer’s journal</p>
              <a class="btn" href="https://link.springer.com/chapter/10.1007/978-981-16-8862-1_55" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>

          <div class = "card">
            <div class = "card-content">
              <h3>Paint clone desktop application in python</h3>
              <p>A paint clone with the following functionalities: Color palette, variable pencil size, shape drawing choices
with the provision of saving the work.</p>
              <a class="btn" href="https://github.com/PrabhavKarve/Paint-by-python" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>
        </div>

        <div class="card-container">
          
        </div>
    </section>
  );
}

export default Projects;
