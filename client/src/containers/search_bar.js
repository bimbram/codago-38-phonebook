import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      // id: this.props.id || '',
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

  handleSearchChange(e) {
    let name = this.state.name
    let phone = this.state.phone
      if(e.target.name === 'name') {
        name = e.target.value
      }
      if(e.target.name === 'phone') {
        phone = e.target.value
      }
    this.props.actions.searchData(name, phone)
  }

  render() {
    // console.log("ini this.props di search_bar: ", this.props);
    return (
      <div>
        <br />
        <div className="panel panel-default">


          <div className="panel-heading">
           <h3 className="panel-title">Search Form</h3>
          </div>

          <div className="panel-body" onChange={(e)=>{this.handleSearchChange(e)}}>
            <form id="search-form" className="form-inline" method="post">
              <div className="form-group">
                <label>Name:</label>
                <input onChange={this.handleNameChange.bind(this)}
                type="text" className="form-control" name="name" value={this.state.name} />
              </div>
              {'\u00A0'}
              <div className="form-group">
                <label>Phone:</label>
                <input onChange={this.handlePhoneChange.bind(this)}
                type="number" className="form-control" name="phone" value={this.state.phone}/>
              </div>
            </form>
          </div>


        </div>

      </div>

    );
  }
}
