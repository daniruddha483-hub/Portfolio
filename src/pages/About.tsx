import "./About.css";
import profileImage from "../assets/images/profile.jpeg";

function About() {
  return (
    <main className="about">
      <section className="aboutSection">
        <div className="aboutContainer">

          <div className="aboutImage">
            <div className="profileFrame">
              <img
                src={profileImage}
                alt="Aniruddha Dhota"
              />
            </div>
          </div>

          <div className="aboutContent">
            <p className="aboutLabel">
              GET TO KNOW ME
            </p>

            <h1>
              About <span>Me</span>
            </h1>

            <p className="aboutIntro">
              I'm Aniruddha Dhota — a designer, developer,
              and technology explorer who enjoys turning ideas
              into meaningful digital experiences.
            </p>

            <p>
              I'm interested in software development, creative
              design, emerging technologies, and exploring how
              technology can be used to solve real-world problems.
            </p>

            <p>
              I enjoy learning by building. Whether it's creating
              applications, experimenting with new technologies,
              or working on personal projects, I'm always looking
              for something new to explore.
            </p>

            <div className="aboutDetails">
              <div>
                <strong>Focus</strong>
                <span>Development & Design</span>
              </div>

              <div>
                <strong>Interests</strong>
                <span>Technology & Exploration</span>
              </div>

              <div>
                <strong>Currently</strong>
                <span>Learning & Building</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default About;