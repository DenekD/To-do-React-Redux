import * as TaskActionTypes from '../actiontypes/task';

export const addTask = text => {
  return {
    type: TaskActionTypes.ADD_TASK,
    text
  };
};

export const removeTask = id => {
  return {
    type: TaskActionTypes.REMOVE_TASK,
    id
  }
}

export const compliteTask = id => {
  return {
    type: TaskActionTypes.COMPLITE_TASK,
    id
  }
}