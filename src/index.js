import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Link, NavLink,
} from 'react-router-dom';
import store from './redux/store';
import logo from './img/planet.png';
import Missions from './components/missions/Missions';
import Rockets from './components/rockets/Rockets';
import Myprofile from './components/myprofile/Myprofile';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <nav>
          <div className="left">
            <img className="img-logo" alt="logo" src={logo} />
            <Link className="logo" to="/"> Space Traveler&apos;s Hub</Link>
          </div>
          <div className="right">
            <NavLink className="nav-link" to="/" activeClassName="activeLink">Rockets</NavLink>
            <NavLink className="nav-link" to="/missions" activeClassName="activeLink">Missions</NavLink>
            <NavLink className="nav-link" to="/myprofile" activeClassName="activeLink">My Profile</NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
