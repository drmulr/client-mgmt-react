import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
