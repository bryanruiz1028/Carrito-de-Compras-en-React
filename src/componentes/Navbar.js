import React, { Component } from 'react';
import './Navbar.css';
import Carro from './Carro';

class Navbar extends Component {
  render() {
    const {carro,esCarroVisible, mostrarCarro } = this.props
    return (
      <nav className="navbar">
        <ul className="navbar-list"><li className="navbar-item">
            <h1 className="navbar-logo">logo</h1>
          </li>
          <li className="navbar-item">
            <Carro carro={carro}
            esCarroVisible={esCarroVisible}
            mostrarCarro={mostrarCarro}/>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
