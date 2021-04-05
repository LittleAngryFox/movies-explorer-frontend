import './AboutProject.css';
import React from 'react';

function AboutProject() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="title">О проекте</h2>

        <dl className="about__plan">
          <dt className="about__plan-title">Димломный проект включал 5 этапов</dt>
          <dd className="about__plan-subtitle">Составление плана, работу над бэкендом, верстку, добавление
        функциональности и финальные доработки.</dd>

          <dt className="about__plan-title">На выполнение диплома ушло 5 недель</dt>
          <dd className="about__plan-subtitle">У каждого этапа был мягкий и жесткий дедлайн, которые нужно было
        соблюдать, чтобы успешно защититься.</dd>
        </dl>

        <div className="about__graph">
          <p className="about__graph-title about__graph-title_green">1 неделя</p>
          <p className="about__graph-subtitle">Back-end</p>
          <p className="about__graph-title about__graph-title_green_light-grey">4 недели</p>
          <p className="about__graph-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;