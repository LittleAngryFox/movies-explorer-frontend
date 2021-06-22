import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className={`navigation navigation_place_header ${props.isOpen && 'navigation_burger'}`}>
            <button type='button' className='navigation__button-close' onClick={props.onClose}></button>
            <nav className='navigation__items'>
                <ul className='navigation__list'>
                    <li className='navigation-items'><Link to='/' className={`navigation__link navigation__link_header ${props.page === 'main' && 'text-underlined'}`} onClick={props.onClose}>Главная</Link></li>
                    <li className='navigation-items'><Link to='/movies' className={`navigation__link ${props.page === 'movies' && 'text-underlined'}`} onClick={props.onClose}>Фильмы</Link></li>
                    <li className='navigation-items'><Link to='/saved-movies' className={`navigation__link ${props.page === 'saved-movies' && 'text-underlined'}`} onClick={props.onClose}>Сохранённые фильмы</Link></li>

                    <li className='navigation-items'><div className='navigation__account'>
                        <Link to='/profile' className={`navigation__account-link ${props.page === 'profile' && 'text-underlined'}`} onClick={props.onClose}>Аккаунт
                            <div className='navigation__account-img'></div>
                        </Link>
                    </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
