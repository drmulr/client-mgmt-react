import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import clients from '../sample-clients';

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
        <List 
          loadSampleClients={this.loadSampleClients}
          clients={this.state.clients}/>
        <Footer />
      </div>
    );
  }
}

export default App;
