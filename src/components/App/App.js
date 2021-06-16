import React from 'react';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import './App.css';

import * as auth from '../../utils/auth';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/api';
import apiMovies from '../../utils/MoviesApi';
import MoviesFilter from '../Filter/Filter';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Loader from '../Loader/Loader';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  //localStorage.removeItem('movies');
  const history = useHistory();
  const location = useLocation();
  //информация, залогинился пользователь или нет
  const [loggedIn, setLoggedIn] = React.useState(false);
  //фильмы из localStorage (те, что подгружаются с внешнего API)
  const [localPlace, setLocalPlace] = React.useState(location.pathname);

  //информация о пользователе, подгружаемого с внутреннего API
  const [currentUser, setCurretUser] = React.useState({ _id: '', name: 'Имя профиля', email: 'Информация о пользователе' });
  //фильмы из localStorage (те, что подгружаются с внешнего API)
  const [movies, setMovies] = React.useState([]);
  //список отфильтрованных фильмов по всем фильмам
  const [moviesSearch, setMoviesSearch] = React.useState([]);
  //обозначения короткометражного фильма (вкладка Фильмы)
  const [shortFilm, setShortFilm] = React.useState(false);
  //список сохраненных фильмов
  const [savedFilms, setSavedFilms] = React.useState([]);
  //список отфильтрованный фильмов по сохраненным фильмам
  const [savedMoviesSearch, setSavedMoviesSearch] = React.useState([...savedFilms]);
  //стейт открытия/закрытия бургер-меню
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  //ошибки от API
  const [errorApi, setErrorApi] = React.useState({ value: false, message: '' });
  //ключ поиска по основным фильмам (вкладка Фильмы)
  const [keySearch, setKeySearch] = React.useState('');
  //ключ поиска по сохраненным фильмам (вкладка Сохраненные фильмы)
  const [keySearchSave, setKeySearchSave] = React.useState('');
  //размеры окна, для определения отображения карточек
  const [sizeWindow, setSizeWindow] = React.useState(window.visualViewport.width + 5);
  //стейт, начала поиска
  const [searchStart, setSearchStart] = React.useState(false);
  //стейт, начала поиска
  const [searchStartSaved, setSearchStartSaved] = React.useState(false);
  //стейт, нашлись фильмы или нет
  const [searchStatus, setSearchStatus] = React.useState(false);
  //стейт, нашлись сохр. фильмы или нет
  const [searchStatusSaved, setSearchStatusSaved] = React.useState(false);
  //стейт, окончания поиска
  const [searchEnd, setSearchEnd] = React.useState(false);
  //стейт, окончания поиска сохр. фильмов
  const [searchEndSaved, setSearchEndSaved] = React.useState(false);
  //обозначения короткометражного фильма (вкладка Сохраненные фильмы)
  const [shortFilmSaved, setShortFilmSaved] = React.useState(false);

  //стейт активности импута
  const [readOnly, setReadOnly] = React.useState(true);
  //стейт видимости кнопки сохранения
  const [hiddenSaveButton, setHiddenSaveButton] = React.useState(true);
  //стейт видимости кнопки редактирования
  const [hiddenChangeButton, setHiddenChangeButton] = React.useState(false);


  //Проверка токена и перевод на основную страницу, если токен ОК
  React.useEffect(() => {
    //если в localStorage есть информация по токену
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      // проверяем токен пользователя запросом на внутренний сервер
      auth.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            if (localPlace === "/signin" || localPlace === "/signup")
              history.push("/movies");
            else
              history.push(localPlace);
          }
        });
    }
  }, [history, localPlace]);

  React.useEffect(() => {
    setLocalPlace(location.pathname);
  }, []);

  //Получение информации о пользователе
  React.useEffect(() => {
    //если выполнен вход
    if (loggedIn) {
      const token = localStorage.getItem('token');
      //отправляем запрос к внутреннему API для получения пользовательских данных
      api.getUserInfo(token)
        .then((result) => {
          //сохраняем результат в переменную контекста
          setCurretUser(result);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  }, [loggedIn]);

  //получение информации о текущей ширине окна
  React.useEffect(() => {
    setSizeWindow(window.visualViewport.width + 5);
  }, []);

  //Получение информации о сохраненных карточках
  React.useEffect(() => {
    //если выполнен вход
    if (loggedIn) {
      const token = localStorage.getItem('token');
      //отправляем запрос к внутреннему API для получения сохраненных фильмов
      api.getSavedMovies(token)
        .then((result) => {
          //выбираем только те карточки, которые относятся к этому пользователю
          const saveFilm = result.filter((item) => item.owner._id === currentUser._id.toString());
          //результат добавляем в стейт сохраненные фильмы
          setSavedFilms([...saveFilm]);
          //чтобы на вкладке Сохраненные фильмы были изначально фильмы
          setSavedMoviesSearch([...saveFilm]);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  }, [loggedIn, currentUser]);

  //отрисовка фильмов (вкладка Фильм)
  React.useEffect(() => {
    if (keySearch && searchStart && movies) {
      const moviesList = MoviesFilter(movies, keySearch, shortFilm);
      setSearchStatus(true);
      (moviesList.length !== 0) ? setMoviesSearch(moviesList) : setSearchStatus(false);
      setSearchEnd(true);
    }
  }, [movies, keySearch, shortFilm, searchStart]);

  //отрисовка фильмов (вкладка Сохраненные фильмы)
  React.useEffect(() => {
    if ((keySearchSave || searchStartSaved) || shortFilmSaved) {
      const moviesList = MoviesFilter(savedFilms, keySearchSave, shortFilmSaved);
      setSearchStatusSaved(true);
      (moviesList.length !== 0) ? setSavedMoviesSearch(moviesList) : setSearchStatusSaved(false);
      setSearchEndSaved(true);
    }
  }, [savedFilms, keySearchSave, shortFilmSaved, searchStartSaved, searchEndSaved]);

  //активировать кнопку сохранения данных пользователя
  function handleActiveSaveButton() {
    //показать кнопку сохранения
    setHiddenSaveButton(false);
    //скрыть кнопки управления редактированием
    setHiddenChangeButton(true);
    //сделать инпуты редактируемыми
    setReadOnly(false);
  }

  //скрыть кнопку сохранения данных пользователя
  function handleCloseSaveButton() {
    //скрыть кнопку сохранения
    setHiddenSaveButton(true);
    //сделать поля нередактируемыми
    setReadOnly(true);
    //показать кнопку редактирования
    setHiddenChangeButton(false);
  }

  //отменить изменения и выйти из редактирования
  function handleUndoSaveButton() {
    window.location.reload();
    //скрыть кнопку сохранения
    setHiddenSaveButton(true);
    //сделать поля нередактируемыми
    setReadOnly(true);
    //показать кнопку редактирования
    setHiddenChangeButton(false);
  }

  //изменение поиска по короткометражке во вкладке Фильм
  function handleChangeShortFilm(e) {
    setShortFilm(e);
    setSearchStart(true);
    setMoviesSearch([]);
  }

  //изменение поиска по короткометражке во вкладке Сохраненные фильмы
  function handleChangeShortFilmSaved(e) {
    setShortFilmSaved(e);
    setSearchStartSaved(true);
    setSavedMoviesSearch([...savedFilms]);
  }

  //открытие меню-бургер
  function handleActiveBurgerMenu() {
    setIsBurgerOpen(true);
  }

  //закрытие меню-бургер
  function handleCloseBurgerMenu() {
    setIsBurgerOpen(false);
  }

  //Вход
  function handleLogin() {
    setLoggedIn(true);
    history.push('/movies');
  }

  //Выход
  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurretUser({ _id: '', name: 'Имя профиля', email: 'Информация о пользователе' });

    history.push('/movies');
    setMoviesSearch([]);
    //обнуляем все стейты
    setShortFilm(false);
    setSavedFilms([]);
    setSavedMoviesSearch([]);
    setErrorApi({ value: false, message: '' });
    setKeySearch('');
    setKeySearchSave('');
    setSearchStart(false);
    setSearchStartSaved(false);
    setSearchStatus(false);
    setSearchStatusSaved(false);
    setSearchEnd(false);
    setSearchEndSaved(false);
    setShortFilmSaved(false);
  }

  //отслеживание ошибки при входе
  function handleIsInfoTooltipClick(positiveStatus, message, email, password) {
    if (positiveStatus) {
      setErrorApi(false, '');
      handleLoginSubmit(email, password);
    } else {
      setErrorApi({ value: true, message });
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
          handleLogin();
        } else {
          handleIsInfoTooltipClick(false, data.message);
        }
      })
      .catch((err) => console.log(err));
  }

  //Регистрация
  function handleRegisterSubmit(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        if (res.ok) {
          handleIsInfoTooltipClick(true, '', email, password);
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
        if (err.status === 409) {
          setErrorApi({ value: true, message: `Почтовый адрес ${info.email.value} не уникальный` });
        }
        setErrorApi({ value: true, message: err.message });
        console.log(err); // выведем ошибку в консоль
      });
  }

  //Форматирование массива со стороннего API
  function reAssembleArray(array) {
    const newArray = array.map((item) => ({
      id: item.id || '',
      nameRU: item.nameRU || '',
      nameEN: item.nameEN || item.nameRU,
      duration: item.duration || '',
      image: item.image ? `https://api.nomoreparties.co${item.image.url}` : '',
      trailerLink: item.trailerLink || 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      director: item.director || '',
      country: item.country || '',
      description: item.description || '',
      year: item.year || '',
      thumbnail: item.image ? `https://api.nomoreparties.co${item.image.formats.thumbnail.url}` : '',
    }));
    return newArray;
  }

  //получение фильмов из внешнего api
  function getMoviesApi() {
    //если в сторедже нет данных - запросить
    if (!localStorage.getItem('movies')) {
      apiMovies.getMovies()
        .then((res) => {
          //форматируем полученные данные к корректным полям
          const listMovies = reAssembleArray(res);
          //сохраняем в сторедже
          localStorage.setItem('movies', JSON.stringify(listMovies));
          setMovies(JSON.parse(localStorage.getItem('movies')));
        })
        .catch((err) => console.log(err));
    }
  }

  //Получение фильмов
  function handleGetMovies(key, saveFilmUser) {
    if (saveFilmUser) {
      setSearchEndSaved(false);
      setSearchStartSaved(true);

      setKeySearchSave(key);

    } else {
      setSearchEnd(false);
      setSearchStart(true);

      getMoviesApi();
      setMovies(JSON.parse(localStorage.getItem('movies')));

      setKeySearch(key);
    }
  }

  //Сохранение фильмов
  function savedMovie(movie, token) {
    api.savedMovie(movie, token)
      .then((newMovie) => {
        setSavedFilms([...savedFilms, newMovie]);
        setSavedMoviesSearch([...savedFilms, newMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //удаление фильмов
  function deleteSavedMovie(movie, token) {
    const film = savedFilms.find((i) => i.id === movie.id.toString());
    api.deleteSavedMovie(film._id, token)
      .then(() => {
        const newMovies = savedFilms.filter((m) => m.id !== movie.id.toString());
        setSavedFilms(newMovies);
        const newMoviesSearch = savedMoviesSearch.filter((m) => m.id !== movie.id.toString());
        setSavedMoviesSearch(newMoviesSearch);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Сохранение или удаление фильма
  function handleSavedMovie(movie, save) {
    //false - не был раннее сохранен - нужно сохранить
    const token = localStorage.getItem('token');
    let isLiked = save;
    //чтобы понять, данный пользователь сохранил или удаляет эту запись
    if (!isLiked) {
      if (savedFilms.length !== 0) {
        isLiked = savedFilms.some((i) => i.id === movie.id.toString());
      }
    }

    if (isLiked) {
      deleteSavedMovie(movie, token);
    } else {
      savedMovie(movie, token);
    }
  }

  function handleHiddenErrorSign() {
    setErrorApi({ value: false, message: '' });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className='page'>

        <Switch>

          <Route exact path='/'>
            <Header loggedIn={loggedIn} background={true} menu={true} page={'main'} onBurger={handleActiveBurgerMenu} isOpen={isBurgerOpen} onClose={handleCloseBurgerMenu} onClearError={handleHiddenErrorSign} />
            <Main />
            <Footer />
          </Route>

          <Route path='/signin'>
            <Header minimal={true} onClearError={handleHiddenErrorSign} />
            <Login onLogin={handleLoginSubmit} apiError={errorApi} />
          </Route>

          <Route path='/signup'>
            <Header minimal={true} onClearError={handleHiddenErrorSign} />
            <Register onRegister={handleRegisterSubmit} apiError={errorApi} />
          </Route>

          <Route path='/movies'>
            <Header loggedIn={loggedIn} menu={true} page={'movies'} onBurger={handleActiveBurgerMenu} isOpen={isBurgerOpen} onClose={handleCloseBurgerMenu} onClearError={handleHiddenErrorSign} />
            <ProtectedRoute
              path='/movies'
              component={Movies}
              loggedIn={loggedIn}
              sizeWindow={sizeWindow}

              searchStart={searchStart}
              searchStatus={searchStatus}
              searchEnd={searchEnd}

              keySearch={keySearch}
              moviesSearch={moviesSearch}
              savedMovies={savedFilms}
              shortFilm={shortFilm}

              onCheckBox={handleChangeShortFilm}
              onSearchFilm={handleGetMovies}
              onClickSaved={handleSavedMovie}
            />
            <Footer />
          </Route>

          <Route path='/saved-movies'>
            <Header loggedIn={loggedIn} menu={true} page={'saved-movies'} onBurger={handleActiveBurgerMenu} isOpen={isBurgerOpen} onClose={handleCloseBurgerMenu} onClearError={handleHiddenErrorSign} />
            <ProtectedRoute
              path='/saved-movies'
              component={SavedMovies}
              loggedIn={loggedIn}
              sizeWindow={sizeWindow}

              searchStart={searchStartSaved}
              searchStatus={searchStatusSaved}
              searchEnd={searchEndSaved}

              keySearch={keySearchSave}
              moviesSearch={savedMoviesSearch}
              savedMovies={savedFilms}
              shortFilm={shortFilmSaved}

              onCheckBox={handleChangeShortFilmSaved}
              onSearchFilm={handleGetMovies}
              onClickSaved={handleSavedMovie}
            />
            <Footer />
          </Route>


          <Route path='/profile'>
            <Header loggedIn={loggedIn} menu={true} page={'profile'} onBurger={handleActiveBurgerMenu} isOpen={isBurgerOpen} onClose={handleCloseBurgerMenu} onClearError={handleHiddenErrorSign} />
            <ProtectedRoute
              path='/profile'
              component={Loader}
              page={Profile}
              loggedIn={loggedIn}

              load={!currentUser._id}
              apiError={errorApi}
              readOnly={readOnly}

              hiddenSaveButton={hiddenSaveButton}
              hiddenChangeButton={hiddenChangeButton}

              handleUndoSaveButton={handleUndoSaveButton}
              handleActiveSaveButton={handleActiveSaveButton}
              onSignOut={handleLogout}
              onUpdateUser={handleUpdateUser}
              handleCloseSaveButton={handleCloseSaveButton}
            />
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
