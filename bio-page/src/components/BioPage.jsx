import React from "react";
import "./BioPage.css";
import pfp from "../assets/pfp.jpeg";
import banner from "../assets/banner.jpg";

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
        <h3>About Me</h3>
        <p>
          Passionate Software Engineer & AI Enthusiast | Exploring the Future of
          Tech
        </p>
        <p>
          Computer Science student at COMSATS University Islamabad with
          expertise in Java, Python, C++, and MySQL. Passionate about Web
          Development, Software Engineering, AI, and Machine Learning, with a
          strong foundation in problem-solving and system design.
        </p>
        <p>
          <ul>
            <li>Active member of university societies.</li>
            <li>
              Organized tech events and attended bootcamps for professional
              growth.
            </li>
          </ul>
        </p>

        <p>
          Goal: To secure top-tier internships and advance in Full-Stack
          Development, AI, and ML.
        </p>

        <p>
          Always open to learning, collaborating, and building something
          impactful! 🚀
        </p>
      </div>
    </div>
  );
};

export default BioPage;
