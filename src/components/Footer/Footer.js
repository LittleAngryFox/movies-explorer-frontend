import React from 'react';
import './Footer.css';

function Footer() {
    const date = new Date();

    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>

            <div className="footer__bar">
                <p className="footer__bar-copy">&copy; {date.getFullYear()}</p>
                <ul className="footer__bar-social">
                    <li className="footer__bar-social-item"><a href="https://praktikum.yandex.ru/profile/web/" className="footer__bar-social-item-link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                    <li className="footer__bar-social-item"><a href="https://github.com/LittleAngryFox" className="footer__bar-social-item-link" target="_blank" rel="noreferrer">Github</a></li>
                    <li className="footer__bar-social-item"><a href="https://www.facebook.com/" className="footer__bar-social-item-link" target="_blank" rel="noreferrer">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;