import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Footer from './Footer/footer'
import Main from './Main.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
