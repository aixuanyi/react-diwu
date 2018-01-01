import {createStore, combineReducers} from 'redux'


const listReducer = (state = [], action) => {
	const { type, list } = action;
	//const type = action.type; const val = action.val
	if(type == "CART_LIST"){
      state = list;
      return state;
  }else{
    return state;
  }
}

const countReducer = (state = 0, action) => {
  const { type, num } = action;
  if(type == "GET_COUNT_NUM"){
      state = num;
      return state;
  }else{
    return state;
  }
}

const totalReducer = (state = 0, action) => {
  const { type, sum } = action;
  if(type == "TOTAL_PRICE"){
      state = sum;
      return state;
  }else{
    return state;
  }
}

const numReducer = (state = 0, action) => {
  const { type, num } = action;
  if(type == "TOTAL_NUM"){
      state = num;
      return state;
  }else{
    return state;
  }
}

const allReducer = (state = true, action) => {
  const { type, ischoose } = action;
  if(type == "ALL_CHOOSE"){
      state = ischoose;
      return state;
  }else{
    return state;
  }
}

const delateReducer = (state = false, action) => {
  const { type, delate } = action;
  if(type == "DELATE_ITEM"){
      state = delate;
      return state;
  }else{
    return state;
  }
}

const reducer = combineReducers({
	listReducer,
  countReducer,
  totalReducer,
  numReducer,
  allReducer,
  delateReducer
})
const store = createStore(reducer);

export default store;