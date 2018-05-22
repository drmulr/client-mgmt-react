import React from "react";
import { formatDebt } from '../helpers';

class Client extends React.Component {
    render() {
      const name = this.props.details.name;
      const email = this.props.details.email;
      const debt = this.props.details.debt;
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
              <p className="card-text">{formatDebt(debt)}</p>
            </div>
        </div>
        );
      }
}

export default Client;