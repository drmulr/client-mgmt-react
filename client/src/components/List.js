import React from "react";
import Client from "./Client";
import EditClientForm from "./EditClientForm";

class List extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="edit-form">Please load sample clients with button below. The admin panel (top table) is used to edit the data, which is then udpated and displayed below. There is limited formatting, but full functionality. </p>
        {Object.keys(this.props.clients).map(key => (
          <EditClientForm
            key={key}
            index={key}
            client={this.props.clients[key]}
            updateClient={this.props.updateClient}
          />
        ))}
        <div className="static">
          <ul>
            {Object.keys(this.props.clients).map(key => (
              <Client key={key} details={this.props.clients[key]} />
            ))}
          </ul>
        </div>
        <button onClick={this.props.loadSampleClients}>
          Load Sample Clients
        </button>
      </div>
    );
  }
}

export default List;
