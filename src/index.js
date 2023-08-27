import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/login' element={ <Login /> } />
        <Route path='/pc-monitoring' element={ <App /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);