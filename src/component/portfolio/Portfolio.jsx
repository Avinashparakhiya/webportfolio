import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assetes/photo2.jpg";
import IMG2 from "../../assetes/photo3.jpg";
import IMG3 from "../../assetes/photo4.jpg";
import IMG4 from "../../assetes/photo5.jpg";
import IMG5 from "../../assetes/photo6.jpg";
import IMG6 from "../../assetes/photo7.jpg";
import IMG7 from "../../assetes/photo7.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This Is a Portfolio item Title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com/avinashparakhiya"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This Is a Portfolio item Title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com/avinashparakhiya"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This Is a Portfolio item Title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com/avinashparakhiya"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This Is a Portfolio item Title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com/avinashparakhiya"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This Is a Portfolio item Title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com/avinashparakhiya"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This Is a Portfolio item Title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com/avinashparakhiya"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
