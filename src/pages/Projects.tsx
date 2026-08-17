import "./Projects.css";

function Projects() {
  return (
    <main className="projects-page">

      <section className="projects-hero">
        <div className="projects-heading">

          <p className="projects-label">
            WHAT I'VE BUILT
          </p>

          <h1>
            Projects & <span>Experiments</span>
          </h1>

          <p className="projects-intro">
            A collection of projects where I experiment with technology,
            design, and ideas to build things that are actually useful.
          </p>

        </div>
      </section>


      <section className="projects-section">

        <div className="section-title">
          <p className="section-label">
            FEATURED PROJECTS
          </p>

          <h2>
            Things I've built
          </h2>
        </div>


        <div className="projects-grid">

          {/* AIRFORGE */}

          <article className="project-card">

            <div className="project-number">
              01
            </div>

            <div className="project-icon">
              ✦
            </div>

            <span className="project-type">
              COMPUTER VISION
            </span>

            <h3>
              AirForge
            </h3>

            <p>
              A gesture-based CAD sketching application that uses
              computer vision and hand tracking to allow users to
              interact with a virtual CAD workspace using hand gestures.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>OpenCV</span>
              <span>MediaPipe</span>
            </div>

            <a
              href="https://github.com/daniruddha483-hub/AirForge"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>

          </article>


          {/* FITTRACK */}

          <article className="project-card">

            <div className="project-number">
              02
            </div>

            <div className="project-icon">
              ◉
            </div>

            <span className="project-type">
              WEB APPLICATION
            </span>

            <h3>
              FitTrack
            </h3>

            <p>
              A fitness tracking web application designed to help users
              monitor workouts, exercise progress, and personalized
              fitness information through a simple dashboard.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>SQLite</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <a
              href="#"
              className="project-link"
            >
              View Project →
            </a>

          </article>


        

          <article className="project-card shiva-project">

            <div className="project-number">
              03
            </div>

            <div className="project-icon">
              ⚡
            </div>

            <span className="project-type">
              WEBSITE
            </span>

            <h3>
              Shiva Gym
            </h3>

            <p>
              A website built for <strong>Shiva Gym, BC Road</strong>,
              designed to give the gym a professional online presence
              and provide visitors with information about the gym,
              its services, and training environment.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive Design</span>
            </div>

            <a
              href="https://shiva-multygym.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </article>

        </div>

      </section>

    </main>
  );
}

export default Projects;