import React, { Component } from 'react';

class Borbuja extends Component {
  getNumber(n) {
    if (!n) {
      return " ";
    }
    return n > 9 ? "9+" : n
  }

  render() {
    const { value } = this.props
    return (
      <div>
        {this.getNumber(value)}
      </div>
    );
  }
}

export default Borbuja;
