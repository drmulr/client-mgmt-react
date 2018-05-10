import React from 'react';

class EditClientForm extends React.Component {

    render() {
        return (
            <div>
                <p>Edit Client Portal</p>
                <input type="text" name="name" value={this.props.client.name} />
                <input type="text" name="email" value={this.props.client.email} />
                <input type="text" name="debt" value={this.props.client.debt} />
            </div>  
        )
    }
}

export default EditClientForm;