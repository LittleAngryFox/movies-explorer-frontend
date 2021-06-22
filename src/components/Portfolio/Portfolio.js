import './Portfolio.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <>
            <h2 className='student__portfolio-title'>Портфолио</h2>

            <ul className='student__portfolio'>

                <li className='student__portfolio-link'><a href='https://littleangryfox.github.io/how-to-learn/' className='student__portfolio-link-item' target='_blank' rel='noreferrer'>Статичный сайт</a><div className='student__portfolio-arow'></div></li>

                <li className='student__portfolio-link'><a href='https://littleangryfox.github.io/how-to-learn/' className='student__portfolio-link-item' target='_blank' rel='noreferrer'>Адаптивный сайт</a><div className='student__portfolio-arow'></div></li>

                <li className='student__portfolio-link'><a href='https://lenin.mesto.students.nomoredomains.icu' className='student__portfolio-link-item' target='_blank' rel='noreferrer'>Одностраничное приложение</a><div className='student__portfolio-arow'></div></li>
            </ul>
        </>
    );
}

export default Portfolio;
