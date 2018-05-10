import React from "react";
import { formatDebt } from '../helpers';

class Client extends React.Component {
    render() {
      const name = this.props.details.name;
      const email = this.props.details.email;
      const debt = this.props.details.debt;
        return (
          <div>
                <p><strong>Client Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p className="bottom"><strong>Outstanding Balance:</strong> {formatDebt(debt)}</p>
          </div>
        );
      }
}

export default Client;