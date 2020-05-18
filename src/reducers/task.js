import * as TaskActionTypes from '../actiontypes/task';


const initialState = {
    tasks: [
      {
        text: "kup głosnik",
        id: 0,
        completed: false
      },
      {
        text: "wyrzuć śmieci",
        id: 1,
        completed: false
      },
      {
        text: "zrób obiad",
        id: 2,
        completed: true
      },
    ]
}

export default function Task(state=initialState, action) {
  switch(action.type) {
    case TaskActionTypes.COMPLITE_TASK: {

      return {
        tasks: state.tasks.map( task => {
          if( action.id === task.id) {
            return {
              ...task,
              completed: true
            }
          }
          return task;
        })
      }
    }

    case TaskActionTypes.REMOVE_TASK: {

      return {
        tasks: state.tasks.filter( task => action.id !== task.id)
      }
    }

    case TaskActionTypes.ADD_TASK: {
      var newId = state.tasks.length;
      return {
        tasks: [
          {
            text: action.text,
            id: newId,
            completed: false
          },
          ...state.tasks
        ]
      }
    }

    default:
      return state;

  }
}