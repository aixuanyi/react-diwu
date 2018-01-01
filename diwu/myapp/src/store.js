import {createStore, combineReducers} from 'redux'

const listReducer = (state = [], action) => {
  const { type, val } = action;
  //const type = action.type; const val = action.val
  switch (type){
    case 'KIND_LIST':
	
        return [...state,val];
      break;
    
    default:
       return state;
  }
}


const reducer = combineReducers({
  listReducer
  
})
const store = createStore(reducer);

export default store;