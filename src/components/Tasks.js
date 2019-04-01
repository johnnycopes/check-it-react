import React, { Component } from 'react';
import Task from './Task';

import '../scss/components/Tasks.scss';

class Tasks extends Component {

  render() {
    const { tasks, updateTask, deleteTask } = this.props;
    const taskComponents = tasks.map(task => {
      return (
        <Task key={task.id} 
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask} 
        />
      );
    });

    return (
      <div className="tasks">
        {taskComponents}
      </div>
    );
  }
}

export default Tasks;