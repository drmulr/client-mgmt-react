import React from "react";
import Client from "./Client";
import EditClientForm from "./EditClientForm";

class List extends React.Component {
  render() {
    return (
      <div>
        <h1>Client Invoice List</h1>
        {Object.keys(this.props.clients).map(key => (
          <EditClientForm key={key} client={this.props.clients[key]} />
        ))}
        <ul>
          {Object.keys(this.props.clients).map(key => (
            <Client key={key} details={this.props.clients[key]} />
          ))}
        </ul>
        <button onClick={this.props.loadSampleClients}>
          Load Sample Clients
        </button>
      </div>
    );
  }
}

export default List;
