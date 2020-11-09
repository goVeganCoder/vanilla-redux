import {createStore} from 'redux';

const ADD ="ADD";
const DELETE = "DELETE";

//actioncreater
export const addTodo =(text)=>{
   return {
       type: ADD,
       text
   }
}

export const delteTodo =(id)=>{
   return {
       type: DELETE,
       id: parseInt(id)
   }
}



const reducer =  (state = [], action )=>{
    switch(action.type){
        case ADD:
            return [{text:action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
                    return state;
                }
            };
            
const store = createStore(reducer);
export const actionCreators = {
                addTodo,
                delteTodo
            }


// store.subscribe(); 리액트는 변화가 있는 부분만 랜더링 되기 웒함. 전체가 아니라



export default store;

