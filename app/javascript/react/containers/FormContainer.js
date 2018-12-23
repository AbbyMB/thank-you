import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      eventDate: '',
      description: '',
      showStatus: "hide",
      formOpen: false
    }
  this.handleTitleChange = this.handleTitleChange.bind(this)
  this.handleEventDateChange = this.handleEventDateChange.bind(this)
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  this.handleClearForm = this.handleClearForm.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.showForm = this.showForm.bind(this)

  }

  handleTitleChange(event){
    this.setState({ title: event.target.value })
  }
  handleEventDateChange(event){
    this.setState({ eventDate: event.target.value})
  }
  handleDescriptionChange(event){
    this.setState({ description: event.target.value })
  }
  handleClearForm(){
    this.setState({
      title: '',
      eventDate: '',
      description: '',
      showStatus: "hide",
      formOpen: false
    })
  }
  handleSubmit(event){
    event.preventDefault();
    let formPayLoad = {
      title: this.state.title,
      event_date: this.state.eventDate,
      description: this.state.description
    }
    this.props.createNewEvent(formPayLoad)
    this.handleClearForm()
  }
  showForm(){
    if (this.state.formOpen === false) {
      this.setState({ formOpen: true, showStatus: "" })
    } else {
      this.setState({ formOpen: false, showStatus: "hide" })
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.showForm}>Create New Event</button>
        <form onSubmit={this.handleSubmit} className={this.state.showStatus}>
          <h6>Enter Event Info</h6>
          <label>
            Title:
            <input
              type="text"
              onChange={this.handleTitleChange}
              value={this.state.title}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              onChange={this.handleEventDateChange}
              value={this.state.eventDate}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}




export default FormContainer
