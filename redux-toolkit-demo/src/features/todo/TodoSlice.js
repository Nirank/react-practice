// slice - js file hep to create a big objs. initial state and all reducers

import { createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [{id:1 , text:"Hello, world"}],
};

export const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push({
          id: nanoid(),
          text: action.payload,
        });
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id!== action.payload);
      },
    },
});



export const {addTodo, removeTodo} = TodoSlice.actions

export default TodoSlice.reducer;






