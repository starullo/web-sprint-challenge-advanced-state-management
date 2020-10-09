import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Smurf from './Smurf.jsx';
import {Route, Link, Switch} from 'react-router-dom';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 3%;
`


const Saved = (props) => {

    return (
        <Div>
            {props.smurfs.map(smurf=>{
                return (
                        <Smurf smurfs={props.smurfs} smurf={smurf}></Smurf>
                )
            })}
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {})(Saved);
