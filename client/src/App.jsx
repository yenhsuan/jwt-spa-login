import React from 'react';
import { hot } from 'react-hot-loader/root';
import TestPage from './components/views/TestPage';
import './sass/main.scss';

const App = () => (
  <div className="app-root">
    test
    <div className="app-root__text">
      dfsdsdfsdfsd
    </div>
    <TestPage />
  </div>
);

export default hot(App);
