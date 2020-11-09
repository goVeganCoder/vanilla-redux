import React from 'react';
import {connect} from 'react-redux';
import {actionCreators, delteTodo} from '../store';
import { Link } from "react-router-dom"

function ToDo ({text, onBtnClick, id}){
    return (
        <li>
            <Link to={`/${id}`}>
            {text}  <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps){
    console.log(ownProps.id);
    return{
        onBtnClick: ()=> dispatch(actionCreators.delteTodo(ownProps.id)) 
    }
}
export default connect(null, mapDispatchToProps) (ToDo);