import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import clients from '../sample-clients';
import Client from './Client';

class App extends Component {

    state = {
      clients: {}
    };

    loadSampleClients = () => {
      this.setState({ clients: clients });
    };

  render() {
    return (
      <div className="App">
        <Header />
        <List loadSampleClients={this.loadSampleClients}/>
        <ul>
          {Object.keys(this.state.clients).map(key => <Client key={key} details={this.state.clients[key]}/>)}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
