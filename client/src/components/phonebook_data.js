import React, { Component } from 'react';

class PhonebookData extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name || '',
      phone: this.props.phone || ''
    }
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }


  render() {
    console.log("ini this.props di PhonebookData ", this.props);
    if(this.props.isEditing) {
      return (
        <tr className="form-group">
          <td>{this.props.index}</td>
          <td><input className="form-control" onChange={this.handleNameChange.bind(this)}
          value={this.state.name}/></td>
          <td><input type="number" className="form-control" onChange={this.handlePhoneChange.bind(this)}
          value={this.state.phone}/></td>
          <td>
            <button className='btn btn-success'
            onClick={() => {
              this.props.actions.hideEditForm(this.props.itemId)
              this.props.actions.saveEditData(this.props.itemId, this.state.name, this.state.phone)
            }}>
              Save
            </button>
            <button className='btn btn-danger' onClick={() => {this.props.actions.deleteData(this.props.itemId)}}>
              Delete
            </button>
          </td>
        </tr>
      )
    } else if (this.props.isEditing === false || !this.props.isEditing){
      return(
        <tr>
          <td>{this.props.index}</td>
          <td>{this.state.name}</td>
          <td>{this.state.phone}</td>
          <td>
            <button className='btn btn-success'
            onClick={() => {
              this.props.actions.showEditForm(this.props.itemId)}}>
              Edit
            </button>
            <button className='btn btn-danger' onClick={() => {this.props.actions.deleteData(this.props.itemId)}}>
              Delete
            </button>
          </td>
        </tr>
      )
    }
  }
}

export default PhonebookData
