import React, { Component } from 'react';

import '../scss/components/AddTaskForm.scss';

class AddTaskForm extends Component {

  nameRef = React.createRef();

  addTask = (event) => {
    event.preventDefault();
    const task = this.nameRef.current.value;
    this.props.addTask(task);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="form"
        onSubmit={this.addTask}
        >
        <input className="form__input"
          name="name"
          placeholder="Any more tasks?"
          ref={this.nameRef}
        />
        <button className="form__button">
          Add
        </button>
      </form>
    )
  }
}

export default AddTaskForm;