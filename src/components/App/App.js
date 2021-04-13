import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";

import './App.css';

import * as auth from '../../utils/auth.js';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/api"
import apiMovies from "../../utils/MoviesApi"
import MoviesFilter from "../Filter/Filter"

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import HowToLearn from '../StaticSite/StaticSite';
import RussianTravel from '../AdaptiveSite/AdaptiveSite';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"

function App() {
  //localStorage.removeItem('movies');

  const history = useHistory();
  const [movies, setMovies] = React.useState(JSON.parse(localStorage.getItem('movies')));
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  const [currentUser, setCurretUser] = React.useState({ _id: '', name: "Имя профиля", email: "Информация о пользователе" });

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [errorApi, setErrorApi] = React.useState({ value: false, message: '' });

  const [savedFilms, setSavedFilms] = React.useState([]);

  const [moviesSearch, setMoviesSearch] = React.useState([]);
  const [savedMoviesSearch, setSavedMoviesSearch] = React.useState(savedFilms);

  const [keySearch, setKeySearch] = React.useState('');
  const [keySearchSave, setKeySearchSave] = React.useState('');

  const [sizeWindow, setSizeWindow] = React.useState(window.visualViewport.width + 5);

  const [moviesNotFound, setMoviesNotFound] = React.useState(false);
  const [shortFilm, setShortFilm] = React.useState(false);
  const [shortFilmSaved, setShortFilmSaved] = React.useState(false);

  React.useEffect(() => {
    setSizeWindow(window.visualViewport.width + 5);
  }, [])

  //Проверка токена 
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      // проверяем токен пользователя
      auth.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/');
          }
        });
    }
  }, [history])

  React.useEffect(() => {
    if (loggedIn) {
      //инициализация карточек
      const token = localStorage.getItem('token');
      api.getSavedMovies(token)
        .then((result) => {
          const saveFilm = result.filter((item) => {
            return item.owner._id === currentUser._id.toString()
          })
          setSavedFilms([...saveFilm]);
          setSavedMoviesSearch([...saveFilm]);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }
  }, [loggedIn, currentUser]);

  //запрос к серверу о начальной информации
  React.useEffect(() => {
    //инициализация информации о пользователе

    if (loggedIn) {
      const token = localStorage.getItem('token');
      api.getUserInfo(token)
        .then((result) => {
          setCurretUser(result);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        })
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (keySearch && movies) {
      savedMoviesList();
      const moviesList = MoviesFilter(movies, keySearch, shortFilm);
      moviesList.length !== 0 ? setMoviesSearch(moviesList) : setMoviesNotFound(true);
    }
  }, [movies, keySearch, shortFilm])

  React.useEffect(() => {
    setMoviesNotFound(false);
    setSavedMoviesSearch(savedFilms);
    if (savedFilms) {
      const moviesList = MoviesFilter(savedFilms, keySearchSave, shortFilmSaved);
      moviesList.length !== 0 ? setSavedMoviesSearch(moviesList) : setMoviesNotFound(true);
    }
  }, [savedFilms, keySearchSave, keySearch, shortFilmSaved])

  function handleChangeShortFilm(e) {
    setShortFilm(e);
  }

  function handleChangeShortFilmSaved(e) {
    setShortFilmSaved(e);
  }

  function savedMoviesList() {
    savedFilms.forEach((i) => {
      movies &&
        movies.map((movie) => {
          movie.id.toString() === i.id && (movie.save = true);
          return movie;
        })
    });
  }

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function closeBurger() {
    setIsBurgerOpen(false);
  }

  //Вход
  function handleLogin() {
    setLoggedIn(true);
    history.push('/');
  }

  //Выход
  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurretUser({ name: "Имя профиля" });
    history.push('/');
  }

  function handleIsInfoTooltipClick(positiveStatus, message) {
    if (positiveStatus) {
      setErrorApi(false, '');
      history.push("/signin");
    } else {
      setErrorApi({ value: true, message: message });
    }
  }

  //Залогиниться
  function handleLoginSubmit(email, password) {
    if (!email || !password) {
      return;
    }
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          handleLogin(email);
        } else {
          handleIsInfoTooltipClick(false, data.message);
        }
      })
      .catch(err => console.log(err));
  }

  //Регистрация
  function handleRegisterSubmit(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        if (res.ok) {
          handleIsInfoTooltipClick(true);
        } else {
          handleIsInfoTooltipClick(false, res.message);
        }
      })
      .catch((err) => console.log(err));
  }

  //установка новых значений данных профиля
  function handleUpdateUser(info) {
    const token = localStorage.getItem('token');
    api.patchUserInfo(info, token)
      .then((data) => {
        setCurretUser(data);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }

  function reAssembleArray(array) {
    let newArray = array.map((item) => {
      return {
        id: item.id || "",
        nameRU: item.nameRU || "",
        nameEN: item.nameEN || item.nameRU,
        duration: item.duration || "",
        image: item.image ? "https://api.nomoreparties.co" + item.image.url : "",
        trailerLink: item.trailerLink || "http://localhost:3001/not-found",
        director: item.director || "",
        country: item.country || "",
        description: item.description || "",
        year: item.year || "",
        thumbnail: item.image ? "https://api.nomoreparties.co" + item.image.formats.thumbnail.url : "",
      }
    })
    return newArray;
  }

  function getMoviesApi() {
    if (!localStorage.getItem('movies')) {
      apiMovies.getMovies()
        .then((res) => {
          const listMovies = reAssembleArray(res);
          localStorage.setItem('movies', JSON.stringify(listMovies));
          setMovies(listMovies);
        })
        .catch((err) => console.log(err));
    }

  }

  //Получение фильмов
  function handleGetMovies(key, saveFilmUser) {
    setMoviesNotFound(false);
    setMoviesSearch([]);
    setSavedMoviesSearch([]);
    setKeySearchSave('');
    setKeySearch('');

    if (saveFilmUser) {
      setKeySearchSave(key)
    } else {
      getMoviesApi();
    }
    savedMoviesList();
    setKeySearch(key);
  }

  function savedMovie(movie, token) {
    api.savedMovie(movie, token)
      .then((newMovie) => {
        movies.find((m) => m.id.toString() === newMovie.id && (m.save = true));
        setSavedFilms([newMovie, ...savedFilms]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteSavedMovie(movie, token) {

    const film = savedFilms.find((i) => { return i.id === movie.id.toString() })
    api.deleteSavedMovie(film._id, token)
      .then(() => {
        movies.find((m) => m.id === movie.id && (m.save = false));
        const newMovies = savedFilms.filter((m) => m.id !== movie.id.toString());
        setSavedFilms(newMovies);
        const newMoviesSearch = savedMoviesSearch.filter((m) => m.id !== movie.id.toString());
        setSavedMoviesSearch(newMoviesSearch);
      })
      .catch((err) => {
        console.log(err);
      });
    savedMoviesList();
  }

  //Сохранение или удаление фильма
  function handleSavedMovie(movie, save) {
    const token = localStorage.getItem('token');
    let isLiked = save;
    !isLiked && ((savedFilms.length !== 0) && (isLiked = savedFilms.some(i => i.id === movie.id.toString())));
    if (isLiked) {
      deleteSavedMovie(movie, token);
    } else {
      savedMovie(movie, token);
    }

  }
  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        <Switch>

          <Route path='/signin'>
            <Header minimal={true} />
            <Login onLogin={handleLoginSubmit} apiError={errorApi} />
          </Route>

          <Route path='/signup'>
            <Header minimal={true} />
            <Register onRegister={handleRegisterSubmit} apiError={errorApi} />
          </Route>

          <Route exact path='/'>
            <Header loggedIn={loggedIn} background={true} menu={true} page={"main"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
            <Main />
            <Footer />
          </Route>

          <Route path='/movies'>
            <Header loggedIn={loggedIn} menu={true} page={"movies"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
            <ProtectedRoute loggedIn={loggedIn} path="/movies" sizeWindow={sizeWindow} onCheckBox={handleChangeShortFilm} component={Movies} keySearch={keySearch} moviesSearch={moviesSearch} moviesNotFound={moviesNotFound} onSearchFilm={handleGetMovies} onClickSaved={handleSavedMovie} />
            <Footer />
          </Route>

          <Route path='/saved-movies'>
            <Header loggedIn={loggedIn} menu={true} page={"saved-movies"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} sizeWindow={sizeWindow} onCheckBox={handleChangeShortFilmSaved} component={SavedMovies} keySearch={keySearchSave} moviesSearch={savedMoviesSearch} moviesNotFound={moviesNotFound} onSearchFilm={handleGetMovies} onClickSaved={handleSavedMovie} />
            <Footer />
          </Route>

          <Route path='/profile'>
            <Header loggedIn={loggedIn} menu={true} page={"profile"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
            <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} onSignOut={handleLogout} onUpdateUser={handleUpdateUser} />
          </Route>

          <Route path='/how-to-learn'>
            <HowToLearn />
          </Route>

          <Route path='/russian-travel'>
            <RussianTravel />
          </Route>

          <Route path='/*'>
            <NotFound />
          </Route>

        </Switch>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
