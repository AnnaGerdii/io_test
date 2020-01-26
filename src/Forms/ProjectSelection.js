import React from 'react';
import './form.scss';

const projects = [
  'Flirchi', 'io', 'company name',
  'facenews.com', 'core', 'planner',
  'player', 'digital'];

const ProjectSelection = () => (
  <section className="form-wrapper">
    <article className="form form_select">
      <h2 className="form__heading">
          Hi, Nikita!
      </h2>
      <h3 className="form__sub-heading">
          Please choose your project.
      </h3>
      <ul size={4} className="form__select">
        {projects.map(project => (
          <li className="form__option">
            {project}
          </li>
        ))}
      </ul>
    </article>
  </section>
);

export default ProjectSelection;
