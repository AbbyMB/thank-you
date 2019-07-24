import React, { Component } from 'react';
import EventTile from '../components/EventTile'
import FormContainer from './FormContainer'

class EventsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  this.createNewEvent = this.createNewEvent.bind(this)
  }

  componentDidMount(){
    let userId = window.currentUser.id
    fetch(`/api/v1/users/${userId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => { 
        this.setState({ events: body.user.events });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  createNewEvent(formPayLoad){
    let userId = window.currentUser.id
    fetch(`/api/v1/users/${userId}/events`, {
      method: 'POST',
      body: JSON.stringify(formPayLoad),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(newEvent => {
      let allEvents = this.state.events
      let addedEvent = newEvent.event
      this.setState({ events: allEvents.concat(addedEvent)})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let events = this.state.events.map(event => {
      return(
        <EventTile
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.event_date}
          description={event.description}
        />
      )
    })
    return(
      <div id="events">
        <h3>My Events</h3>
        <FormContainer
          createNewEvent={this.createNewEvent}
        />
        {events}
      </div>
    )
  }
}

export default EventsContainer;
