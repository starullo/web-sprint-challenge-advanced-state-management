import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs, addSmurf} from '../actions';
import styled from 'styled-components';

const Div = styled.div`

    form {
        width: 30%;
        margin: auto;
        display: flex;
        flex-direction: column;
        border: solid 2px black;
        padding: 2%;
        text-align: center;
        
        p {
            font-weight: bold;
        }
        
        input {
            margin: 2% auto;
        }

        button {
            margin-top: 2%;
            padding: 1%;
            width: 50%;
            margin: auto;
            border: solid 2px black;
            border-radius: 7px;
        }
    }
`


const initialInputValues = {
    name: '',
    age: '',
    height: '',
}

const Form = (props) => {
    const [inputValues, setInputValues] = useState(initialInputValues);

    useEffect(()=>{
        props.fetchSmurfs();
    }, [])

    const handleChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf({...inputValues, id: props.smurfs.length});
        setInputValues(initialInputValues);
    }

    return (
        <Div>
            <form>
                <p>NAME</p>
                <input
                name='name'
                type='text'
                value={inputValues.name}
                onChange={handleChange} />
                <p>AGE</p>
                <input
                name='age'
                type='text'
                value={inputValues.age}
                onChange={handleChange} />
                <p>HEIGHT</p>
                <input
                name='height'
                type='text'
                value={inputValues.height}
                onChange={handleChange} /><br/>
                <button onClick={handleSubmit}>SUBMIT SMURF!</button>
            </form>
            
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, {fetchSmurfs, addSmurf})(Form);
