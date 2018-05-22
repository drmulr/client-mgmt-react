import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import List from './List';
import clients from '../sample-clients';

class App extends Component {

    state = {
      clients: {}
    };

    loadSampleClients = () => {
      this.setState({ clients: clients });
    };

    updateClient = (key, updatedClient) => {
      //This is coming from EditClientForm's handleChange()
      //1. Take a copy of current state
      const clients = {...this.state.clients};
      //2. Update that state
      clients[key] = updatedClient;
      //3. Setting it to state
      this.setState({ clients }); 
    }

    sortAscending = () => {
      alert("sortAscending works!");
    };

    

  render() {
    return (
      <div>
          <Header />
          <div className="App container">
            <List 
              updateClient={this.updateClient}
              loadSampleClients={this.loadSampleClients}
              clients={this.state.clients}
              />
          </div>
      </div>
    );
  }
}

export default App;
