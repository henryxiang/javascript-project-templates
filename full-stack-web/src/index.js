import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

// import App from './App';

// render(<App />, document.getElementById('app'));
const renderApp = async () => {
  const App = await import('./App');
  render(<App />, document.getElementById('app'));
}

renderApp();
