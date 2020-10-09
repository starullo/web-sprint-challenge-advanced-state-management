import React from 'react';
import styled from 'styled-components';
import {useParams, Link, Route, useRouteMatch} from 'react-router-dom';


const Div = styled.div`
    width: 15%;
    border: solid 2px black;
    padding: 2%;
    text-align: center;
    margin: 2% auto;
`

const Smurf = (props) => {
    
    return (
        <Div>
            <h1>{props.smurf.name}</h1>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </Div>
    )
}

export default Smurf
