import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="section-title">меню</h1>
        <ul className="menu">
          <li><Link className="menu-link" to='/items'>Товары</Link></li>
          <li><Link className="menu-link" to='/about'>О нас</Link></li>        
        </ul>
      </div>
    );
  }
}

export default Menu;