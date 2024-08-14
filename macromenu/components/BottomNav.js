import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/BottomNav.css';

export default function BottomNav() {
  return (
    <nav className="bottom-navigation">
      <NavLink to="/" className="nav-item" activeClassName="active">
        <span>🏠</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/addfood" className="nav-item" activeClassName="active">
        <span>🍽️</span>
        <span>Add Food</span>
      </NavLink>
      <NavLink to="/login" className="nav-item" activeClassName="active">
        <span>⚙️</span>
        <span>Login</span>
      </NavLink>
    </nav>
  );
}