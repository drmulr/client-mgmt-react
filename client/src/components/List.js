import React from "react";
import Client from "./Client";
import EditClientForm from "./EditClientForm";

class List extends React.Component {
  render() {
    return (
      <div className="main">

        <div className="instructions row">
          <div className="col-lg-8 text-center m-auto">
            <p>Please load sample clients to begin. The Admin Panel (Edit Client Data) is used to update customer data. It is then udpated and displayed below for review.</p>
          </div>
        </div>
        
        <div className="row">
            <div className="edit col-lg-6 mr-auto">
              <h3>Edit Client Data</h3>
              <button className="btn btn-outline-success" onClick={this.props.loadSampleClients}>
                Load Sample Clients
              </button>
              {Object.keys(this.props.clients).map(key => (
                <EditClientForm
                  key={key}
                  index={key}
                  client={this.props.clients[key]}
                  updateClient={this.props.updateClient}
                />
              ))}
            </div>
          
            <div className="static col-lg-6">
              <h3>Review Client Data</h3>
                <button data-sort="down" className="btn btn-outline-dark" onClick={this.props.sortDescending}>
                  Debt <span role="img" alt="down-arrow">👇</span>
                </button>
                <button className="btn btn-outline-dark" onClick={this.props.sortAbc}>
                  Name <span role="img" alt="abc">🔤</span>
                </button>
              <div>
                {Object.keys(this.props.clients).map(key => (
                  <Client key={key} details={this.props.clients[key]} />              
                ))}
              </div>
            </div>
        </div>
        


      
      </div>
    );
  }
}

export default List;
