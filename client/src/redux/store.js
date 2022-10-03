// import createStore from redux
import {createStore} from 'redux';

// import reducer to implement it to redux store
import reducer from '../utils/reducers'

// the store will contains all actions found in the reducer files
// All the actions will be executed in switch-case mode
const store = createStore(reducer)

export default store;