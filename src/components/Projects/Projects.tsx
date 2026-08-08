import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Featured Projects</h2>

      <div className={styles.projectGrid}>
        <article className={styles.card}>
          <h3>AirCAD</h3>

          <p>
            A gesture-based CAD sketching system that uses
            computer vision and hand tracking to create an
            interactive drawing experience.
          </p>

          <p className={styles.tech}>
            Python • OpenCV • MediaPipe
          </p>
        </article>

        <article className={styles.card}>
          <h3>FitTrack</h3>

          <p>
            A fitness management dashboard that helps users
            track workouts, monitor progress, and organize
            their fitness journey.
          </p>

          <p className={styles.tech}>
            Flask • SQLite • HTML • CSS • JavaScript
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;