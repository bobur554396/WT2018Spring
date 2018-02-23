import React from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import helpers from '../utils/helpers';


class TimersDashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timers: [
        {
          project: "Test project 1",
          title: "Test title 1",
          id: helpers.guid(),
          elapsed: 5456099,
          runningSince: null,
        },
        {
          project: "Test project 2",
          title: "Test title 2",
          id: helpers.guid(),
          elapsed: 10000,
          runningSince: Date.now(),
        }
      ],
    };
  }

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };


  handleEditFormSubmit = (timer) => {
    this.updateTimer(timer)
  };


  updateTimer = (newTimer) => {
  
    const newArr = this.state.timers.map((timer) => {
      if (timer.id === newTimer.id) {
        return Object.assign({}, timer, {
          title: newTimer.title,
          project: newTimer.project,
        });
      } else {
        return timer;
      }
    });
    
    this.setState({
      timers: newArr,
    });    
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== timerId),
    })
  };


  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;