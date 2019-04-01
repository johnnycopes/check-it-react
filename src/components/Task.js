import React, { Component } from 'react';

import '../scss/components/Task.scss';
const classNames = require('classnames');

class Task extends Component {

  checkboxRef = React.createRef();

  updateTask = () => {
    const { id, name } = this.props.task;
    const isCompleted = this.checkboxRef.current.checked;
    this.props.updateTask({
      id,
      name,
      completed: isCompleted
    });
  }

  deleteTask = () => {
    this.props.deleteTask(this.props.task);
  }

  render() {
    const { name, completed } = this.props.task;
    const taskClass = classNames({
      "task": true,
      "task--completed": completed
    });

    return (
      <div className={taskClass}>
        <input className="task__checkbox"
          type="checkbox"
          defaultChecked={completed}
          ref={this.checkboxRef}
          onChange={this.updateTask}
          />
        <span className="task__name">
          {name}
        </span>
        <button className="task__delete"
          onClick={this.deleteTask}
          >
          ✖
        </button>
      </div>
    );
  }
}

export default Task;