import React, { Component } from 'react';
import { generateUUID } from './utility';

import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import Tasks from './components/Tasks';

import './scss/styles.scss';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        name: 'Make to-do list',
        completed: true
      },
      {
        id: 1,
        name: 'Buy sweet potatoes',
        completed: false
      },
      {
        id: 2,
        name: 'Iron pants',
        completed: false
      }
    ]
  };

  addTask = taskName => {
    const tasks = [...this.state.tasks];
    tasks.push({
      id: generateUUID(),
      name: taskName,
      completed: false
    });
    this.setState({ tasks });
  }

  updateTask = updatedTask => {
    const tasks = [...this.state.tasks];
    const taskToUpdateIndex = tasks.findIndex(task => task.id === updatedTask.id);
    tasks[taskToUpdateIndex] = updatedTask;
    this.setState({ tasks });
  }

  deleteTask = taskToDelete => {
    const tasks = [...this.state.tasks];
    const taskToDeleteIndex = tasks.findIndex(task => task.id === taskToDelete.id);
    tasks.splice(taskToDeleteIndex, 1);
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="app">
        <Header tasks={this.state.tasks} />
        <div className="list">
          <AddTaskForm addTask={this.addTask} />
          <Tasks tasks={this.state.tasks} updateTask={this.updateTask} deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default App;
