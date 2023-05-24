import React, { Component } from "react";
import "./Producto.css";
import Button from './Button';

class Producto extends Component {
  render() {
    const { producto,agregarAlCarro } = this.props;

    return (
      <div className="producto-card">
        <h2 className="producto-name">{producto.name}</h2>
        <img className="producto-img" alt={producto.name} src={producto.img} />
        <h4 className="producto-price">{producto.price}</h4>
        <Button onClick ={()=> agregarAlCarro(producto) } >
            agregar al carroproducto
        </Button>
      </div>
    );
  }
}

export default Producto;
