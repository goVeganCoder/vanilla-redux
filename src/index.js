import {createStore} from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number= document.querySelector('span');


const ADD = "ADD";
const MINUS = "MINUS";
//reducer는 data를 변경하는 함!수! return 하는게 데이터가 됨
//action으로 modify하게 함
const countModifier = (count=0, action)=>{
switch (action.type){
  case ADD :
    return count +1;
  case MINUS :
    return count -1;
  default:
    return count;
}
  
};

//redux는 reducer를 parameter로 원함
const cousntStore = createStore(countModifier);

const onChange = () =>{
  console.log('change');
  number.innerText = cousntStore.getState();
}

cousntStore.subscribe(onChange);
//dispatch 로 action을 보낼 수 있음


const handleMinus = () =>{
  cousntStore.dispatch({type:MINUS})
}
add.addEventListener('click', () => cousntStore.dispatch({type:ADD}));
minus.addEventListener('click', handleMinus);
