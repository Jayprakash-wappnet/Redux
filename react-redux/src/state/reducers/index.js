import { combineReducers } from "redux"
import AccountReducers from "./AccountReducers"

const reducers = combineReducers({
    account: AccountReducers
})

export default reducers