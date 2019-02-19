import {ActionType} from './action'

const initialState= {
  count: 1000000000000000
}

const reducer = (state = initialState,action)  =>{
  if(action.type == ActionType.ADDBANANA){
    return {...state, count: state.count + 1 }
  }
  if(action.type == ActionType.SUBBANANA){
    return {...state, count: state.count -1 }
  }
  if(action.type == ActionType.CLEARBANANA){
    return {...state, count: 0 }
  }
  return state;
}

export default reducer
