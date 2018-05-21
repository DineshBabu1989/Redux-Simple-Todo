export default function(state = [], action) {
  // When the app loads this would check for the state, which is undefined, so set it to null in the argument.
  switch (action.type) {
    case "TEST_INPUT":
      return [
        ...state,
        {
          id: action.id,
          text: action.payload,
          completed: action.completed
        }
      ];
    case "COMPLETE_TASK":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
}
