import React, { Component } from 'react';
import Header from './header'
import PhonebookTable from '../containers/phonebook_table'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/index';

class App extends Component {
  componentDidMount(){
    this.props.actions.loadData()
  }


  render() {
    // console.log("ini this.props.phonebooks di App.js: ", this.props.phonebooks);
    // console.log("ini this.props.actions di App.js: ", this.props.actions);
    console.log("ini this.props di App.js: ", this.props);
    return (
      <div>
        <Header />
        <PhonebookTable phonebooks={this.props.phonebooks} actions={this.props.actions} status={this.props.status}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phonebooks: state.phonebooks,
    status: state.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
