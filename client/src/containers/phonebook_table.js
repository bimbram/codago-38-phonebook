import React, { Component } from 'react';
import SearchForm from './search_bar'
import AddForm from './add_form'
import PhonebookData from '../components/phonebook_data'

export default class App extends Component {



  render() {
    // console.log("ini phonebook-table: ", this.props.phonebooks);
    console.log("ini this.props di phonebook_table ", this.props);
    let nodePhonebookData = this.props.phonebooks.map((item, index) => {
      console.log(item);
      return(
        <PhonebookData actions={this.props.actions} key={item._id}
        itemId={item._id} index={index+1} name={item.name}
        phone={item.phone} status={this.props.status} isEditing={item.isEditing} />
      )
    })
    // console.log(nodePhonebookData);

    return (
      <div>
        <AddForm actions={this.props.actions} status={this.props.status}/>
        <SearchForm actions={this.props.actions} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {nodePhonebookData}
          </tbody>
        </table>
      </div>
    );
  }
}
