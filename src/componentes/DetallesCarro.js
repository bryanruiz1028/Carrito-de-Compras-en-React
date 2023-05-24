import React, { Component } from 'react';
import './DetallesCarro.css';

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props 
    console.log(carro)
    return (
      <div className="detalles-carro">
        <ul>
          {carro.map((x) => (
            <li className="producto" key={x.id}>
              <img alt={x.name} src={x.img} width="50" height="32" />
              {x.name} <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;

