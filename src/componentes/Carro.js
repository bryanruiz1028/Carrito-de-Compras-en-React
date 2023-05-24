import React, { Component } from 'react';
import './Navbar.css';
import Borbuja from './Borbuja';
import DetallesCarro from './DetallesCarro';

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    
    return (
      <div>
        {cantidad !== 0 ? (
          <span className="numero">
            <Borbuja value={cantidad} />
          </span>
        ) : null}
        <button onClick={mostrarCarro} className="navbar-button">
          Carro
        </button>
        {esCarroVisible && cantidad !== 0 ? (
          <DetallesCarro carro={carro} />
        ) : null}
      </div>
    );
  }
}

export default Carro;


