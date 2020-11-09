import React from 'react';
import {connect} from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

//props 에는 store 에서 받은거랑 react router에서 받은 데이터 둘 다 있음
function Home({toDos, addToDo}){

const[text, setText] = React.useState("");

function onChange(e){
    setText(e.target.value);
}

function onSubmit(e){
    e.preventDefault();
    addToDo(text)
    setText('');
    
}
    return (
        <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange}></input>
        <button>Add</button>
        </form>
        <ul>
            {toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}
        </ul>
        </>);
}

function mapStateToProps(state){
    return {toDos: state}
}
function mapDispatchToProps(dispatch){
    return {
        addToDo : text => dispatch(actionCreators.addTodo(text))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
