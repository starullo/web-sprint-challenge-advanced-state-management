import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Form from './Form.jsx';
import Saved from './Saved.jsx';
function App(props) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>SMURFS! wow</h1>
        <Form />
        <Saved />
    </div>
  );
}
 const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
    }
 }

export default connect(mapStateToProps, {})(App);
