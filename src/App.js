import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PlayerActionCreators from './actions/task';

import Input from './components/Input';
import ToDoList from './components/ToDoList';
import CompletedList from './components/CompletedList';


class App extends Component {

  render () {
    const {
      tasks,
      addTask,
      removeTask,
      compliteTask
    } = this.props;

    return (
      <div className="wrapper">
        <Input addTask={addTask} />
        <ToDoList
          tasks={tasks}
          compliteTask={compliteTask}
          removeTask={removeTask}
        />
        <CompletedList
          tasks={tasks}
          removeTask={removeTask}
        />
    </div>
    );
  }
}

const mapStateToProps = state => (
  {
     tasks: state.tasks
  }
)

const mapDispachToProps = dispach => (
  {
    addTask: bindActionCreators(PlayerActionCreators.addTask, dispach),
    removeTask: bindActionCreators(PlayerActionCreators.removeTask, dispach),
    compliteTask: bindActionCreators(PlayerActionCreators.compliteTask, dispach)
  }
)

export default connect(mapStateToProps, mapDispachToProps)(App);
