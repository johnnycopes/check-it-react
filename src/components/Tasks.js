import React, { Component } from 'react';
import Task from './Task';

import '../scss/components/Tasks.scss';

class Tasks extends Component {

  render() {
    const { updateTask, deleteTask } = this.props;
    return (
      <div className="tasks">
        {this.props.tasks.map((task) => <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />)}
      </div>
    );
  }
}

export default Tasks;