import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const renderApp = (App) => {
  ReactDOM.render((
      <App />
  ), document.getElementById('root'));
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./App.js', function() {
    console.log('Accepting the updated app module');
    const NextApp = require('./App').default;
    renderApp(NextApp);
  })
}