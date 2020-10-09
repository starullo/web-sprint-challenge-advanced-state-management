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
    const {id} = useParams();
    const {url, path} = useRouteMatch();

    const smurf = props.smurfs.find(s=>{
        return s.id == id;
    }) || {};

    return (
        <Div>
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </Div>
    )
}

export default Smurf
