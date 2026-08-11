import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>

      <div className={styles.heading}>
        <p className={styles.label}>MY WORK</p>

        <h2>Featured Projects</h2>

        <p className={styles.intro}>
          A selection of things I've built, explored, and experimented with.
        </p>
      </div>


      <div className={styles.projectGrid}>

        {/* AirCAD */}

        <article className={styles.card}>

          <div className={styles.cardTop}>
            <span className={styles.number}>01</span>

            <span className={styles.category}>
              COMPUTER VISION
            </span>
          </div>


          <div className={styles.cardContent}>

            <h3>AirCAD</h3>

            <p>
              A gesture-based CAD sketching system built using
              computer vision and hand tracking. AirCAD turns
              hand gestures into an interactive digital drawing
              experience.
            </p>


            <div className={styles.tech}>
              <span>Python</span>
              <span>OpenCV</span>
              <span>MediaPipe</span>
            </div>


            <button
              className={styles.projectButton}
              onClick={() =>
                window.open(
                  "https://github.com/daniruddha483-hub/AirForge",
                  "_blank"
                )
              }
            >
              View Project →
            </button>

          </div>

        </article>




        <article className={styles.card}>

          <div className={styles.cardTop}>
            <span className={styles.number}>02</span>

            <span className={styles.category}>
              WEB DEVELOPMENT
            </span>
          </div>


          <div className={styles.cardContent}>

            <h3>FitTrack</h3>

            <p>
              A fitness management dashboard designed to help
              users track workouts, monitor progress, and
              organize their fitness journey.
            </p>


            <div className={styles.tech}>
              <span>Flask</span>
              <span>SQLite</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>


            <button className={styles.projectButton}>
              View Project →
            </button>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Projects;