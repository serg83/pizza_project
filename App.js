import React, { Component } from "react";
import EmailForm from '/EmailForm.js';
import AppRouter from './MainPage.js';
//import  { Router, Route, Link, Switch } from 'react-router-dom';

//import fontawesome from 'fortawesome';
//npm install --save react-fontawesome
//import { Router, Route, Link, Switch } from "react-router-dom";

// import "./styles.css";
/*const inputStyle = {
  width: 235,
  margin: 5
}*/
/*
index.html---font-awesome shopping cart
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: [
              { name: "pizza capriciosa" }, 
              { price: "price : 15 $" }
            ],
      count: 0,
      quantity: 0,
      price: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
      quantity: this.state.quantity + 1,
      price: this.state.price + 15
    });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
        quantity: this.state.quantity - 1,
        price: this.state.price - 15
      });
    }
  }


  render() {
    /*const  inputStyle*/
    /*const renderOnline =
    */
    const pizzas = this.state.pizza.map((item, index) => (
      <li key={index}>{item.name}{item.price}</li>
    ));

    return (
      /* style={inputStyle}*/

      <div className="App" style={{ backgroundColor: "pink", width: 750 }}>
      <AppRouter />


        <h1>Shopping Cart: {this.state.count + " items"} <a href='/EmailForm/' ><button  style={{ color: "green", fontSize: 24, borderRadius: 3 }}>
            Order <i className="fa fa-shopping-cart" />
          </button></a>
        </h1>
        <button style={{ color: "blue", fontSize: 24, borderRadius: 3 }} type="button"onClick={this.increment}
        >Add
        </button>
        <button
          style={{ color: "red", fontSize: 24, borderRadius: 3 }}
          type="button"
          onClick={this.decrement}
        >
          Remove
        </button>
        <ul>
          {pizzas}
          <li>{this.state.quantity + " selected pizza(s)"}</li>
        </ul>
        <h1>Total Price: {this.state.price + " $"}</h1>
        <EmailForm />
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80 750w"
          alt="pizza"
        />
      </div>
      
    );
  }
}
export default App


		
               
                  


              
              
             
           
            

