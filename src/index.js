import {createStore} from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo =(text) =>{
  return {
    type: ADD_TODO,
    text
  }
}
const deleteToDo = (id)=>{
  return {
    type: DELETE_TODO,
    id
  }
}
const reducer = (state = [], action) =>{
  switch (action.type){
    case ADD_TODO : 
      return [...state, {text: action.text, id:Date.now()}]; //NEVER MUTATE THE STATE, Return new Object
    case DELETE_TODO :
      console.log("DELETE" + action.id);
      return state.filter( toDo => toDo.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);


const dispatchDeleteToDo = (e) =>{
  console.log(e.target.parentNode);

  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

const paintToDos = () =>{
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintToDos);

const dispatchddToDo = (text) =>{
  store.dispatch(addToDo(text));
}



const onSubmit = e =>{
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchddToDo(toDo);
}

form.addEventListener('submit', onSubmit);