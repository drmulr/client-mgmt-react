import React from "react";

class Client extends React.Component {
    render() {
      const name = this.props.details.name;
      const email = this.props.details.email;
      const debt = this.props.details.debt;
        return (
          <div>
                <h4>Client Name: {name}</h4>
                <h4>Email: {email}</h4>
                <h4>Outstanding Balance: {debt}</h4>
          </div>
        );
      }
}

export default Client;