import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header>
        <div className="header-text">
          <h1>Karylle Lorenzo</h1>
          <p>Full-Stack Developer | Web Developer</p>

          <div className="header-buttons">
            <a href="#projects" className="btn project">My Projects</a>
            <a href="#contact" className="btn contact">Contact Me</a>
          </div>
        </div>

        <div className="header-images">
          <div className="header-image-container">
            {/* fixed alt text */}
            <img src="/images/pic1.jpeg" alt="Karylle Lorenzo" />
          </div>
        </div>
      </header>

      <section id="about">
        <h2 className="heading">About Me</h2>
        <p>
          Hi, I'm Karylle, a web developer who enjoys turning ideas into engaging,
          user-friendly websites. I have experience working with HTML, CSS,
          JavaScript, and backend languages like PHP and Python. I'm always eager
          to learn new technologies and improve my skills to build clean,
          efficient, and responsive web applications.
        </p>
      </section>

      <section id="skills">
        <h2 className="heading">Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
        </ul>
      </section>

      <section id="certificates">
        <h2 className="heading">Certificates</h2>

        <div className="certificates">
          <div className="cert-card">
            <img src="/images/certificate1.png" alt="SAP Certificate" />
            <div className="overlay">
              <p>SAP Certificate</p>
            </div>
          </div>

          <div className="cert-card">
            <img
              src="/images/certificate2.jpg"
              alt="Best in System College Fair 2025 certificate"
            />
            <div className="overlay">
              <p>Best in System College Fair 2025</p>
            </div>
          </div>

          <div className="cert-card">
            <img
              src="/images/certificate3.jpg"
              alt="Best in Presentation College Fair 2025 certificate"
            />
            <div className="overlay">
              <p>Best in Presentation College Fair 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="heading">Projects</h2>

        <div className="projects">
          <a
            href="https://drive.google.com/file/d/1qcopyhgAjJJUqhm1TPZnzcYMqvl2JVyM/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <img src="/images/project1.png" alt="Project 1 preview" />
          </a>

          <a
            href="https://drive.google.com/file/d/1LzWJCiFeX9BrOJlIGddmFsZL3ahq7Q7p/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <img src="/images/project2.png" alt="Project 2 preview" />
          </a>

          <a
            href="https://drive.google.com/file/d/1iE-FlO9VvivgS1wP60LtlBXNg1fqMWf_/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <img src="/images/project3.jpg" alt="Project 3 preview" />
          </a>

          <a
            href="https://drive.google.com/file/d/1UE1a_AJREOeS7GqrPxvSYokl4jP8np6S/view"
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <img src="/images/project4.jpeg" alt="Project 4 preview" />
          </a>
        </div>
      </section>

      <section id="contact">
        <h2 className="heading">Contact</h2>
        <p>You can reach me via email or on my social media:</p>

        <div className="contact-info">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karyllelorenzo18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <i className="bx bx-envelope"></i>
            <span>karyllelorenzo18@gmail.com</span>
          </a>

          <a
            href="https://www.messenger.com/t/krylleeee"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <i className="bx bxl-messenger"></i>
            <span>Karylle Lorenzo</span>
          </a>

          <a
            href="https://www.instagram.com/_kryllee/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <i className="bx bxl-instagram"></i>
            <span>_kryllee</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
