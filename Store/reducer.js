import {ADD_TASK, DEL_TASK, UPDATE_TASK} from './actions';

const initialState = {
  tasks: [],
  id: 0,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTasks = state.tasks;
      newTasks.push(action.task);
      return {
        ...state,
        tasks: newTasks,
        id: state.id + 1,
      };
    case DEL_TASK:
      let updatedTasks = state.tasks.filter(task => task.id !== action.id);
      return {
        ...state,
        tasks: updatedTasks,
      };
    case UPDATE_TASK:
      let newTaskss = state.tasks.filter(task => task.id !== action.task.id);
      newTaskss.push(action.task);
      return {
        ...state,
        tasks: newTaskss,
      };
    default:
      return state;
  }
};

export default taskReducer;
