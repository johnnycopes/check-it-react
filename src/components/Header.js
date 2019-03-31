import React, { Component } from 'react';

import '../scss/components/Header.scss';

class Header extends Component {

  calculateCompletedTasks = () => {
    return this.props.tasks.reduce((accum, current) => {
      return current.completed ? accum + 1 : accum;
    }, 0);
  }

  render() {
    const completedTasks = this.calculateCompletedTasks();
    const totalTasks = this.props.tasks.length;
    return (
      <div className="header">
        <h1 className="header__title">
          Check It!
        </h1>
        <div className="header__counter">
          {completedTasks} / {totalTasks} completed
        </div>
      </div>
    );
  }
}

export default Header;