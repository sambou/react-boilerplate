import React                         from 'react';
import { connect, Provider }         from 'react-redux';
import createStore                   from '../store/index.js';
import NoMatch                       from '../components/no-match.js';
import { changeSampleText, changeAsyncSampleText } from '../actions/index.js';


let select = (state) => {
  return {
    sampleText: state.sampleText
  };
};

let store = createStore();

let App = React.createClass({

  handleSampleAction() {
    this.props.dispatch(changeAsyncSampleText(Math.random().toString()));
  },

  render() {
    return (
      <NoMatch sampleText={this.props.sampleText} handleSampleAction={this.handleSampleAction} />
    );
  }

});

export default connect(select)(App);
