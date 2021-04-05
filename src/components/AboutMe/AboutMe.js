import './AboutMe.css';
import Portfolio from "../Portfolio/Portfolio";
import React from 'react';
import photo from '../../images/avatar.jpg';

function AboutMe() {
    return (
        <section className="student">
            <div className="container">
                <h2 className="title">Студент</h2>

                <div className="student__info">
                    <h2 className="student__info-title">Елена</h2>
                    <p className="student__info-subtitle">Студентка Яндекс Практикума, 24 года</p>
                    <p className="student__about">Я родилась в Новосибирске, но живу на данный момент в Анапе, закончила факультет
                    прикладной математики в НГТУ. Я люблю слушать музыку, увлекаюсь вязанием, вышивкой. Начала кодить еще с
                    университета, но после окончания учебного заведения пошла работать не по специальности. После того, как
                    пройду курс по веб-разработке, хочу начать заниматься фриланс-заказами или найти работу в данной сфере.
        </p>

                    <img className="student__photo" alt="Фото владельца портфолио" src={photo} />

                    <ul className="social">
                        <li className="social-item"><a href="https://www.facebook.com/" className="social-item-link" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li className="social-item"><a href="https://github.com/LittleAngryFox" className="social-item-link" target="_blank" rel="noreferrer">Github</a></li>
                    </ul>
                </div>

                <Portfolio />
            </div>
        </section>
    );
}

export default AboutMe;