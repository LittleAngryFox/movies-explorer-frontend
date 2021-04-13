import React from 'react';
import './Techs.css'

function Techs() {
  return (
    <section className="technology">
      <div className="container">
        <div className="technology__body">

          <h2 className="title">Технологии</h2>

          <div className="technology__info">
            <h2 className="technology__info-title">7 технологий</h2>
            <p className="technology__info-subtitle">На курсе веб&#8209;разработки мы освоили технологии, которые
            применили в дипломном проекте.</p>
          </div>

          <ul className="technology__tool">
            <li className="technology__tool-item  text-uppercase">Html</li>
            <li className="technology__tool-item  text-uppercase">Css</li>
            <li className="technology__tool-item  text-uppercase">Js</li>
            <li className="technology__tool-item ">React</li>
            <li className="technology__tool-item ">Git</li>
            <li className="technology__tool-item ">Express.js</li>
            <li className="technology__tool-item ">mongoDB</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Techs;