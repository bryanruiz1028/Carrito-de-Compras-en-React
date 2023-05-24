import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <button className="custom-button" {...this.props}>
          Agregar al carrito
        </button>
      </div>
    );
  }
}

export default Button;
