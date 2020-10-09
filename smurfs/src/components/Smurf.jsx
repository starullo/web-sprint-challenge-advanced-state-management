import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 10%;
    border: solid 2px black;
    padding: 2%;
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
