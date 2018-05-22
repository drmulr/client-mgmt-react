import React from "react";
import Client from "./Client";
import EditClientForm from "./EditClientForm";

class List extends React.Component {
  render() {
    return (
      <div className="main">

        <div className="instructions row">
          <div className="col-lg-8 text-center m-auto">
            <p>Please load sample clients with button below. The admin panel (top table) is used to edit the data, which is then udpated and displayed below. There is limited formatting, but full functionality. </p>
          </div>
        </div>
        
        <div className="row">
            <div className="edit col-lg-6">
              <h3>Edit Client Data</h3>
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
                <button onClick={this.props.sortAscending}>
                  Sort by Debt
                </button>
              <ul>
                {Object.keys(this.props.clients).map(key => (
                  <Client key={key} details={this.props.clients[key]} />              
                ))}
              </ul>
            </div>
        </div>
        

        <button onClick={this.props.loadSampleClients}>
          Load Sample Clients
        </button>
      
      </div>
    );
  }
}

export default List;
