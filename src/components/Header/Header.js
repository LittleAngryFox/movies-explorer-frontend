import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
    return (
        props.minimal
            ? <header className={'header header_auth'}>

                <div className='header__body'>
                    <Link to='/' className='header__link-logo logo'><img src={logo} alt='Цветной логотип портфолио' className='logo' /></Link>
                </div>

            </header>
            : <header className={props.background ? 'header header_background' : 'header'}>
                <div className='container'>
                    <div className='header__body'>

                        <Link to='/' className='header__link-logo logo'><img src={logo} alt='Цветной логотип портфолио' className='logo' /></Link>
                        {
                            (props.loggedIn && props.menu) ? (
                                <>
                                    <button type='button' className='menu-burger' onClick={props.onBurger}>
                                        <span className='menu-burger__line'></span>
                                    </button>
                                    <Navigation isOpen={props.isOpen}
                                        onClose={props.onClose} page={props.page} />
                                </>
                            )
                                : <div className='header__auth'>
                                    <Link to='/signup' className='header__link' onClick={props.onClearError}>Регистрация</Link>
                                    <Link to='/signin' className='header__button' onClick={props.onClearError}>Войти</Link>
                                </div>
                        }

                    </div>
                </div>
            </header>
    );
}

export default Header;
