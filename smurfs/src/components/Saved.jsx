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
    margin-top: 3%;

    a {
        text-decoration: none;
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
