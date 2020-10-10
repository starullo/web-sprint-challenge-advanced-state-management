import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Smurf from './Smurf.jsx';
import {Route, Link, Switch} from 'react-router-dom';
import {useRouteMatch} from 'react-router-dom';


const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3% auto;
    width: 90%;

    a {
        text-decoration: none;
        display: inline-block;
        width: 20%;
        margin: 3% auto;
        border: solid 2px black;
        padding: 1%;
        text-align: center;
        color: white;
        background-color: #0022ff;
        letter-spacing: 1px;
        transition: all 0.5s ease-in-out;

        &:hover {
            letter-spacing: 4px;
        }
    }
`


const Saved = (props) => {
    const {url, path} = useRouteMatch();

    return (
        <Div>
            {props.smurfs.map(smurf=>{
                return (
                    <Link to={`${url}/${smurf.id}`}>
                        {smurf.name}
                    </Link>
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
