import React, { Component } from 'react';


export default class AddForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id || '',
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

  handleSubmit(e){
    e.preventDefault()

    let name = this.state.name.trim()
    let phone = this.state.phone.trim()

    if(!name || !phone){
      return;
    }
    this.props.actions.addData(name, phone)
    this.setState({name: "", phone: ""})
  }

  render() {
    // console.log("ini this.props di add_form: ", this.props);
    if(this.props.status.showAddForm) {
    return (
      <div>

        <div className="panel panel-default">


          <div className="panel-heading">
           <h3 className="panel-title">Adding Form</h3>
          </div>

          <div className="panel-body">
            <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label>Name:</label>
                <input onChange={this.handleNameChange.bind(this)}
                value={this.state.name}
                type="text" className="form-control" name="name" />
              </div>
              {'\u00A0'}
              <div className="form-group">
                <label>Phone:</label>
                <input type="number" onChange={this.handlePhoneChange.bind(this)}
                value={this.state.phone}
                type="number" className="form-control" name="phone" />
              </div>
                <button type="submit" className='btn btn-primary'>Save</button>
                <button type="submit" className='btn btn-warning' onClick={() => {this.props.actions.hideAddForm()}}>Cancel</button>
            </form>

          </div>


        </div>

        <button className='btn btn-primary' onClick={() => {this.props.actions.hideAddForm()}}>Add</button>
      </div>

    );
  } else {
    return(
      <div>
        <button className='btn btn-primary' onClick={() => {this.props.actions.showAddForm()}}>Add</button>
      </div>
    )
  }
  }
}
