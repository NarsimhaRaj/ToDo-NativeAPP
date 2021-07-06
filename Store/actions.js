export const ADD_TASK = 'ADD_TASK';
export const SET_FILTERS = 'SET_FILTERS';
export const DEL_TASK = 'DEL_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = taskDetails => {
  return {type: ADD_TASK, task: taskDetails};
};

export const deleteTask = id => {
  return {type: DEL_TASK, id: id};
};
export const updateTask = task => {
  return {type: UPDATE_TASK, task: task};
};

// export const setFilters = filterSettings => {
//     return { type: SET_FILTERS, filters: filterSettings };
// };
