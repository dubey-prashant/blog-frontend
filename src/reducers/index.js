import isAuthenticated from "./isLogged"
import { combineReducers } from "redux"

const allReducers = combineReducers({
  isLogged: isAuthenticated
})

export default allReducers