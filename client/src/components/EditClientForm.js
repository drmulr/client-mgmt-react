import React from 'react';

class EditClientForm extends React.Component {

    handleChange = (event) => {
        // need to update client in state with this function 
        // first taking copy of current fish
        const updatedClient = { ...this.props.client,
            [event.currentTarget.name]: event.currentTarget.value };
        this.props.updateClient(this.props.index, updatedClient);
    }



    render() {
        return (
            <div className="client-edit-form">
                <input type="text" name="name" value={this.props.client.name} onChange={this.handleChange}/>
                <input type="text" name="email" value={this.props.client.email} onChange={this.handleChange}/>
                <input type="text" name="debt" value={this.props.client.debt} onChange={this.handleChange}/>
            </div>  
        )
    }
}

export default EditClientForm;