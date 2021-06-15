import React from 'react';
import { Route } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const Loader = ({ page: Page, ...props }) => {
  return (
    <Route>
      {
        () => (props.load ? <Preloader /> : <Page {...props} />)
      }
    </Route>);
};

export default Loader;
