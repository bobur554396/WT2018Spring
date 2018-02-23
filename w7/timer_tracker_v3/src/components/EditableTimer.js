import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editFormOpen: false,
    };
  }

  handleEditClick = () => {
    this.openForm();
  }

  openForm = () => {
    this.setState({
      editFormOpen: true,
    })
  };

  handleFormClose = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.setState({
      editFormOpen: false,
    })
  };

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }
}

export default EditableTimer;