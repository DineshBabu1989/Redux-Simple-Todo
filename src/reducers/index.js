import { combineReducers } from "redux";
import Todos from "./reducer_todos";

const rootReducer = combineReducers({
  todos: Todos
});

export default rootReducer;
