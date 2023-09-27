import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './Components/App';
import About from './Components/About'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



