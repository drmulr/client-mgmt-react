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
      const clientValues = Object.values(this.state.clients);

      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const clientA = a.debt;
        const clientB = b.debt;
      
        let comparison = 0;
        if (clientA > clientB) {
          comparison = 1;
        } else if (clientA < clientB) {
          comparison = -1;
        }
        return comparison * -1;
      }
      
      clientValues.sort(compare);
      console.log(clientValues)

      this.setState({ clients: clientValues });
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
              sortAscending={this.sortAscending}
              />
          </div>
      </div>
    );
  }
}

export default App;
