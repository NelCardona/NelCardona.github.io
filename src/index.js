//componete se pueda observar
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//Dos  parametros. Donde lo imprime y que va a imprimir
//   imprime el compone te de App en el id de root--que esta en el HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>,
  
  document.getElementById('root')
);


