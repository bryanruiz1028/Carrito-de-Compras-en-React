import React, { Component } from "react";
import Producto from './Producto';
import "./Productos.css";

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div className="productos-container">
        {productos.map(producto => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
