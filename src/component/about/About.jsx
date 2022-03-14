import React from "react";
import "./About.css";
import ME from "../../assetes/my1.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>300+ WorldWide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Projects Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            necessitatibus cumque nobis ut nihil nisi perferendis, quisquam ad
            tempore suscipit harum assumenda nesciunt nulla, incidunt odio alias
            doloremque perspiciatis molestiae non dolorem asperiores! Doloremque
            dolorem molestias necessitatibus dolor in recusandae ullam sed sint
            saepe quia, nihil excepturi reprehenderit magni ipsam?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
