import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Form from './Form.jsx';
import Saved from './Saved.jsx';
import {Route, Link, Switch, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Smurf from './Smurf.jsx';

const Div = styled.div`
nav {
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: red;
    display: inline-block;
    background-color: aquamarine;
    padding: 1%;
    border-radius: 10px;
    margin: 3% auto;
  }
}
`

function App(props) {
  return (
    <Div>
      <h1 style={{textAlign: 'center'}}>SMURFS! wow</h1>
      <nav>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/form'>ADD A SMURF</NavLink>
      <NavLink to='/smurfs'>BROWSE SMURFS</NavLink>
      </nav>
      <Switch>
        <Route path='/smurfs/:id'>
          <Smurf smurfs={props.smurfs} />
        </Route>
        <Route path='/form'>
          <Form />
        </Route>

        <Route path='/smurfs'>
          <Saved />
        </Route>

        <Route path='/'>
          <div>
            <h1>WELCOME TO THE MOST USELESS WEBSITE IN THE HISTORY OF ALL THINGS. CLICK ON A LINK ABOVE TO GET STARTED! WE'RE SO HAPPY YOU'RE HERE</h1>
          </div>
        </Route>
      </Switch>
    </Div>
  );
}
 const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      smurfs: state.smurfs,
    }
 }

export default connect(mapStateToProps, {})(App);
