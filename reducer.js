import {ActionType} from './action'

const initialState= {
  count: 0
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
