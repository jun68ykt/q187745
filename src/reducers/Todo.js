const initialState = {
  todoList: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: state.todoList.concat([action.payload.todo])
      };
    case 'DEL_TODO':
      return {
        ...state,
        todoList: state.todoList.concat([action.payload.todo])
      };
    case 'CHANGE_TODO' :
      const changetodo = action.payload.changetodo;
      const changeState = Object.assign({}, state);
      changeState.todoList.pop(action.id, changetodo);
      return changeState;
    default:
      return state;
  }
};
