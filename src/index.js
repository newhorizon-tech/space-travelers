import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router, Routes, Route, Link, NavLink
} from 'react-router-dom';
import logo from './img/planet.png'
import Missions from './components/Missions'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> 
        <App />
        <nav>
          <div className='left'> 
            <img className="img-logo" src= {logo} />
            <Link className="logo" to="/"> Space Traveler's Hub</Link>
          </div>
          <div className='right'> 
            <NavLink className="nav-link" to="/" >Rockets</NavLink>
            <NavLink className="nav-link" to="/missions">Missions</NavLink>
            <NavLink className="nav-link" to="/">My Profile</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
