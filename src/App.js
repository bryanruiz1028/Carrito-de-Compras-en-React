
import"./main.css"
import { Component } from "react"
// import { render } from "react-dom";
import React from 'react';
import Productos from './componentes/Productos';
import Navbar from "./componentes/Navbar";



class App extends Component {
    state = {
    productos: [
          { id: 1, name: 'tomate', price: 10, img :"productos/1.png" },
          { id: 2, name: 'lechuga', price: 20,img :"productos/2.png"},
          { id: 3, name: 'sandia', price: 30 ,img :"productos/3.png"},
          { id: 4, name: 'zanahoria', price: 15, img: 'https://comodibujar.club/wp-content/uploads/2022/08/Zanahoria-kawaii.jpg' },
          { id: 5, name: 'manzana', price: 12, img: 'https://i.pinimg.com/originals/82/46/0c/82460cb9240aa360515fd02a30401dcd.jpg' },
          { id: 6, name: 'uva', price: 25, img: 'https://i.pinimg.com/originals/95/b9/f4/95b9f455db29bd267590b8ebf266cf80.png' },
        ],
        carro:[],
        esCarroVisible: false
      }
      agregarAlCarro=(producto)=>{
        const {carro}= this.state
        if (carro.find(x => x.id === producto.id)){
          const newCarro= carro.map(x=> x.id === producto.id
            ?({
              ...x,
              cantidad:x.cantidad +1
            })
            :x)
          return this.setState({ carro: newCarro})


        }
        return this.setState({
          carro: this.state.carro.concat({
            ...producto,
            cantidad:1,
          })
        }

      )

    }
    mostrarCarro = ()=>{
      this.setState({esCarroVisible:!this.state.esCarroVisible})
    }
  render() {
    console.log(this.state.carro)
    const{ esCarroVisible}= this.state
    return (
      <div>
        <Navbar carro={this.state.carro} 
        esCarroVisible={esCarroVisible}
        mostrarCarro={this.mostrarCarro}
        />
        
          
        <Productos
        agregarAlCarro={this.agregarAlCarro}
        productos={this.state.productos}
        />
        </div>
    
    );
  }
}

export default App;