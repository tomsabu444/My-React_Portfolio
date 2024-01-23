import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

//test phase
import dribbleimg from "../assets/projects-img/dribbble_1.gif"

function Projects() {
  return (
    <Layout>
      <Container>
        <article className="portfolio active">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">
            <ul className="project-list">
              <li className="project-item active">
                <figure className="project-img">
                  {/* <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div> */}
                  <img src={dribbleimg} />
                </figure>
                <h3 className="project-title">test</h3>

                <p className="project-category">test</p>
              </li>
            </ul>
          </section>
        </article>
      </Container>
    </Layout>
  );
}

export default Projects;

const Container = styled.div`
  .filter-list {
    display: none;
  }

  .filter-select-box {
    position: relative;
    margin-bottom: 25px;
  }

  .filter-select {
    background: var(--eerie-black-2);
    color: var(--light-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--jet);
    border-radius: 14px;
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
  }

  .filter-select.active .select-icon {
    transform: rotate(0.5turn);
  }

  .select-list {
    background: var(--eerie-black-2);
    position: absolute;
    top: calc(100% + 6px);
    width: 100%;
    padding: 6px;
    border: 1px solid var(--jet);
    border-radius: 14px;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.15s ease-in-out;
  }

  .filter-select.active + .select-list {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

  .select-item button {
    background: var(--eerie-black-2);
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
    text-transform: capitalize;
    width: 100%;
    padding: 8px 10px;
    border-radius: 8px;
  }

  .select-item button:hover {
    --eerie-black-2: hsl(240, 2%, 20%);
  }

  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 10px;
  }

  .project-item {
    display: none;
  }

  .project-item.active {
    display: block;
    animation: scaleUp 0.25s ease forwards;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .project-item > a {
    width: 100%;
  }

  .project-img {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .project-img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
    transition: var(--transition-1);
  }

  .project-item > a:hover .project-img::before {
    background: hsla(0, 0%, 0%, 0.5);
  }

  .project-item-icon-box {
    --scale: 0.8;

    background: var(--jet);
    color: var(--orange-yellow-crayola);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(var(--scale));
    font-size: 20px;
    padding: 18px;
    border-radius: 12px;
    opacity: 0;
    z-index: 1;
    transition: var(--transition-1);
  }

  .project-item > a:hover .project-item-icon-box {
    --scale: 1;
    opacity: 1;
  }

  .project-item-icon-box ion-icon {
    --ionicon-stroke-width: 50px;
  }

  .project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-1);
  }

  .project-item > a:hover img {
    transform: scale(1.1);
  }

  .project-title,
  .project-category {
    margin-left: 10px;
  }

  .project-title {
    color: var(--white-2);
    font-size: var(--fs-5);
    font-weight: var(--fw-400);
    text-transform: capitalize;
    line-height: 1.3;
  }

  .project-category {
    color: var(--light-gray-70);
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
  }
`;
