import {createStore} from 'redux'
import reducer from './reducer'
import {Addbanana} from './action'

const store = createStore(reducer)

//store.dispatch(Addbanana())

export default store