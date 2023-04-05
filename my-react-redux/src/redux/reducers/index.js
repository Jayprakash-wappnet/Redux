import { combineReducers } from 'redux'

import Myreducers from './Myreducers'

const reducers = combineReducers({
    count: Myreducers
})

export default reducers