import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Footer from './Footer/footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{height:300}}>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
