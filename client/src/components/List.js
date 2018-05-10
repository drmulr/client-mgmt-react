import React from "react";

class List extends React.Component {
    render() {
        return (
          <div>
            <h1>Client Invoice List</h1>

            <button onClick={this.props.loadSampleClients}>Load Sample Clients</button>
          </div>
        );
      }
}

export default List;