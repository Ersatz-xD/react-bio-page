import "./BioPage.css";
import pfp from "../assets/pfp.jpeg";
import banner from "../assets/banner.jpg";
import LinkedInBtn from "./LinkedInBtn";


const BioPage = () => {
  return (
    <div className="main-box">
      <div className="banner-slot">
        <img src={banner} alt="banner" width={700} height={150} />
      </div>

      <div className="pfp-slot">
        <img src={pfp} alt="pfp" width={120} height={120} />
      </div>

      <div className="title-slot">
        <h1>Ayaan Ahmed Khan</h1>
        <p>
          Debugging Life & Code | Aspiring Full-Stack Developer | AI & ML
          Enthusiast{" "}
        </p>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Passionate Software Engineer & AI Enthusiast | Exploring the Future of
          Tech
        </p>
        <p>
          I'm a dedicated Computer Science student at COMSATS University
          Islamabad, driven by curiosity and a desire to innovate in the world
          of technology. My technical toolkit includes Java, Python, C++, and
          MySQL, which I’ve applied to build projects ranging from basic
          applications to backend systems. With a growing focus on Web
          Development, Software Engineering, and Artificial Intelligence, I'm
          constantly exploring how technology can solve real-world problems.
        </p>
        <p>
          Beyond the classroom, I actively contribute to university societies,
          engaging in teamwork, leadership, and creative problem-solving. I’ve
          helped organize tech events, participated in coding competitions, and
          attended industry bootcamps to sharpen both my technical and soft
          skills.
        </p>

        <div>
          <h3>Current Focus Areas</h3>
          <ul>
            <li>
              Enhancing my skills in Full-Stack Development using tools like
              React, Node.js, and MongoDB
            </li>
            <li>
              Exploring AI/ML frameworks and applying them in mini-projects
            </li>
            <li>
              Gaining industry experience through internships and freelance
              collaborations
            </li>
          </ul>
        </div>

        <p>
          Goal: To secure top-tier internships and advance in Full-Stack
          Development, AI, and ML.
        </p>

        <p>
          Always open to learning, collaborating, and building something
          impactful! 🚀
        </p>
      </div>

      <div className="linkedIn-btn-container">
        <LinkedInBtn />
      </div>

    </div>
  );
};

export default BioPage;
