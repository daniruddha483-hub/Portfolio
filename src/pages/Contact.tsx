import "./Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">

        <div className="contact-heading">

          <p className="contact-label">
            LET'S CONNECT
          </p>

          <h1>
            Get in <span>Touch</span>
          </h1>

          <p className="contact-intro">
            Have an idea, project, opportunity, or just want to talk
            about technology? Feel free to reach out.
          </p>

        </div>

      </section>


      <section className="contact-section">

        <div className="contact-grid">

          <a
            href="mailto:daniruddha483@gmail.com"
            className="contact-card email"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <span className="contact-type">
                EMAIL
              </span>

              <h3>
                Send me an email
              </h3>

              <p>
                daniruddha483@gmail.com
              </p>
            </div>
          </a>


          <a
            href="https://github.com/daniruddha483-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card github"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div>
              <span className="contact-type">
                GITHUB
              </span>

              <h3>
                Explore my projects
              </h3>

              <p>
                github.com/daniruddha483-hub
              </p>
            </div>
          </a>


          <a
            href="https://www.linkedin.com/in/aniruddha-dhota-24a010350/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card linkedin"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>

            <div>
              <span className="contact-type">
                LINKEDIN
              </span>

              <h3>
                Connect professionally
              </h3>

              <p>
                LinkedIn Profile
              </p>
            </div>
          </a>


          <a
            href="https://www.instagram.com/guys_im.aniruddha/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card instagram"
          >
            <div className="contact-icon">
              <FaInstagram />
            </div>

            <div>
              <span className="contact-type">
                INSTAGRAM
              </span>

              <h3>
                Follow my journey
              </h3>

              <p>
                Instagram
              </p>
            </div>
          </a>

        </div>


        <div className="contact-message">

          <h2>
            Building something interesting?
          </h2>

          <p>
            I'm always interested in learning, experimenting,
            and turning interesting ideas into real projects.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Contact;