import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Smurf from './Smurf.jsx';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`


const Saved = (props) => {

    return (
        <div>
            {props.smurfs.map(smurf=>{
                return (
                    <Div>
                        <Smurf smurf={smurf}/>
                    </Div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {})(Saved);
