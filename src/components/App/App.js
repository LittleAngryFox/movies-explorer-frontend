import React from 'react';
import './App.css';
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

import { Route, Switch } from "react-router-dom";

function App() {

  //стейт о открытии попапа информации о регистрировании
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function closeBurger() {
    setIsBurgerOpen(false);
  }

  return (
    <div className="page">


      <Switch>

        <Route path='/signin'>
          <Header loggedIn={false} background={false} minimal={true} menu={false} />
          <Login />
        </Route>

        <Route path='/signup'>
          <Header loggedIn={false} background={false} minimal={true} menu={false} />
          <Register />
        </Route>

        <Route exact path='/'>
          <Header loggedIn={true} background={true} minimal={false} menu={true} page={"main"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
          <Main />
          <Footer />
        </Route>

        <Route path='/movies'>
          <Header loggedIn={true} background={false} minimal={false} menu={true} page={"movies"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
          <Movies />
          <Footer />
        </Route>

        <Route path='/saved-movies'>
          <Header loggedIn={true} background={false} minimal={false} menu={true} page={"saved-movies"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path='/profile'>
          <Header loggedIn={true} background={false} minimal={false} menu={true} page={"profile"} onBurger={handleBurgerClick} isOpen={isBurgerOpen} onClose={closeBurger} />
          <Profile />
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
  );
}

export default App;
