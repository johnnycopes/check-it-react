import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm';

import './scss/styles.scss';

class App extends Component {

  state = {
    tasks: [
      {
        name: 'Walk dog',
        completed: false
      },
      {
        name: 'Buy groceries',
        completed: false
      }
    ]
  };

  addTask = task => {
    const tasks = [...this.state.tasks];
    tasks.push({
      name: task,
      completed: false
    });
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="app">
        <h1 className="header">
          Check It!
        </h1>

        <div className="list">
          <AddTaskForm addTask={this.addTask} />
          <div className="tasks">
            <div className="task">Walk dog</div>
            <div className="task">Buy groceries</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
