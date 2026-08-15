import "./Skills.css";

import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiTypescript,
  SiOpencv
} from "react-icons/si";

function Skills() {
  return (
    <main className="skills-page">

      <section className="skills-hero">
        <div className="skills-heading">
          <p className="skills-label">
            WHAT I KNOW
          </p>

          <h1>
            Skills & <span>Certifications</span>
          </h1>

          <p className="skills-intro">
            Technologies I'm exploring, skills I'm developing, and
            certifications that represent my learning journey.
          </p>
        </div>
      </section>


      <section className="skills-section">

        <div className="section-title">
          <p className="section-label">
            TECHNICAL SKILLS
          </p>

          <h2>
            Things I'm building with
          </h2>
        </div>


        <div className="skills-grid">

          <div className="skill-card python-card">
            <div className="skill-icon">
              <FaPython />
            </div>

            <span className="skill-number">
              01
            </span>

            <h3>
              Python
            </h3>

            <p>
              Building applications, automation tools, computer vision
              experiments, and backend projects.
            </p>

            <div className="skill-bar">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>


          <div className="skill-card react-card">
            <div className="skill-icon">
              <FaReact />
            </div>

            <span className="skill-number">
              02
            </span>

            <h3>
              React
            </h3>

            <p>
              Creating modern component-based interfaces and learning
              scalable frontend architecture.
            </p>

            <div className="skill-bar">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>


          <div className="skill-card typescript-card">
            <div className="skill-icon">
              <SiTypescript />
            </div>

            <span className="skill-number">
              03
            </span>

            <h3>
              TypeScript
            </h3>

            <p>
              Building safer and more maintainable React applications
              using strongly typed JavaScript.
            </p>

            <div className="skill-bar">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>


          <div className="skill-card javascript-card">
            <div className="skill-icon">
              <FaJs />
            </div>

            <span className="skill-number">
              04
            </span>

            <h3>
              JavaScript
            </h3>

            <p>
              Developing interactive web experiences, animations,
              and dynamic frontend functionality.
            </p>

            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>


          <div className="skill-card html-card">
            <div className="skill-icon">
              <FaHtml5 />
            </div>

            <span className="skill-number">
              05
            </span>

            <h3>
              HTML
            </h3>

            <p>
              Structuring responsive websites and creating accessible
              semantic web interfaces.
            </p>

            <div className="skill-bar">
              <span style={{ width: "88%" }}></span>
            </div>
          </div>


          <div className="skill-card css-card">
            <div className="skill-icon">
              <FaCss3Alt />
            </div>

            <span className="skill-number">
              06
            </span>

            <h3>
              CSS
            </h3>

            <p>
              Designing responsive layouts, animations, gradients,
              glass effects, and immersive interfaces.
            </p>

            <div className="skill-bar">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>


          <div className="skill-card node-card">
            <div className="skill-icon">
              <FaNodeJs />
            </div>

            <span className="skill-number">
              07
            </span>

            <h3>
              Node.js
            </h3>

            <p>
              Exploring backend development and building server-side
              applications with JavaScript.
            </p>

            <div className="skill-bar">
              <span style={{ width: "65%" }}></span>
            </div>
          </div>


          <div className="skill-card git-card">
            <div className="skill-icon">
              <FaGitAlt />
            </div>

            <span className="skill-number">
              08
            </span>

            <h3>
              Git
            </h3>

            <p>
              Managing source code, tracking changes, and maintaining
              project versions.
            </p>

            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>


          <div className="skill-card github-card">
            <div className="skill-icon">
              <FaGithub />
            </div>

            <span className="skill-number">
              09
            </span>

            <h3>
              GitHub
            </h3>

            <p>
              Hosting projects, managing repositories, releases,
              collaboration, and open-source work.
            </p>

            <div className="skill-bar">
              <span style={{ width: "78%" }}></span>
            </div>
          </div>


          <div className="skill-card opencv-card">
            <div className="skill-icon">
              <SiOpencv />
            </div>

            <span className="skill-number">
              10
            </span>

            <h3>
              OpenCV
            </h3>

            <p>
              Working with computer vision, image processing,
              webcam input, and visual applications.
            </p>

            <div className="skill-bar">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>


          <div className="skill-card cybersecurity-card">

            <div className="skill-icon">
              🛡️
            </div>

            <span className="skill-number">
              11
            </span>

            <h3>
              Cybersecurity
            </h3>

            <p>
              Exploring ethical hacking, security concepts, networking,
              and responsible cybersecurity practices.
            </p>

            <div className="skill-bar">
              <span style={{ width: "65%" }}></span>
            </div>

          </div>


          <div className="skill-card ai-card">

            <div className="skill-icon">
              🧠
            </div>

            <span className="skill-number">
              12
            </span>

            <h3>
              AI & Machine Learning
            </h3>

            <p>
              Learning artificial intelligence fundamentals and exploring
              how intelligent systems can solve real problems.
            </p>

            <div className="skill-bar">
              <span style={{ width: "60%" }}></span>
            </div>

          </div>

        </div>
      </section>


      <section className="certificates-section">

        <div className="section-title">
          <p className="section-label">
            CERTIFICATIONS
          </p>

          <h2>
            Learning beyond the classroom
          </h2>
        </div>


        <div className="certificate-grid">

          <article className="certificate-card">

            <div className="certificate-image">
              <img
                src="src\assets\images\EH.png"
                alt="Ethical Hacking certificate"
              />
            </div>

            <div className="certificate-content">

              <span className="certificate-type">
                CYBERSECURITY
              </span>

              <h3>
                Ethical Hacking
              </h3>

              <p className="certificate-issuer">
                MSME Technology Development Centre
              </p>

              <p>
                Successfully completed online training in Ethical Hacking
                from 11 July 2026 to 26 July 2026.
              </p>

              <span className="certificate-hours">
                18 HOURS
              </span>

            </div>

          </article>


          <article className="certificate-card">

            <div className="certificate-image">
              <img
                src="\src\assets\images\AI.png"
                alt="IBM AI Fundamentals certificate"
              />
            </div>

            <div className="certificate-content">

              <span className="certificate-type">
                ARTIFICIAL INTELLIGENCE
              </span>

              <h3>
                AI Fundamentals
              </h3>

              <p className="certificate-issuer">
                IBM SkillsBuild
              </p>

              <p>
                Foundations for Understanding AI. Issued on 31 July 2026.
              </p>

              <span className="certificate-hours">
                IBM SKILLSBUILD
              </span>

            </div>

          </article>


          <article className="certificate-card">

            <div className="certificate-image">
              <img
                src="src\assets\images\LF.png"
                alt="IBM Lifelong Professional Skills certificate"
              />
            </div>

            <div className="certificate-content">

              <span className="certificate-type">
                PROFESSIONAL DEVELOPMENT
              </span>

              <h3>
                Lifelong Professional Skills
              </h3>

              <p className="certificate-issuer">
                IBM SkillsBuild
              </p>

              <p>
                Completed the Lifelong Professional Skills learning
                program. Issued on 31 July 2026.
              </p>

              <span className="certificate-hours">
                IBM SKILLSBUILD
              </span>

            </div>

          </article>

        </div>
      </section>

    </main>
  );
}

export default Skills;