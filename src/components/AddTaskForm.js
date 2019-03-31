import React, { Component } from 'react';

import '../scss/components/AddTaskForm.scss';

class AddTaskForm extends Component {

  state = {
    value: ''
  };

  addTask = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="form"
        onSubmit={this.addTask}
        >
        <input className="form__input"
          name="name"
          placeholder="Any more tasks?"
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
        />
        <button className="form__button"
          disabled={!this.state.value}
          >
          Add
        </button>
      </form>
    );
  }
}

export default AddTaskForm;