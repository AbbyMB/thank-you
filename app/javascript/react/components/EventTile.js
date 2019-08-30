import React from 'react'
import GiftsContainer from '../containers/GiftsContainer'

const EventTile = props => {
  return(
    <div>
      <i className="fas fa-gift fa-7x"></i>
      <h4>{props.title}</h4>
      <h5>{props.date}</h5>
      <h5>{props.description}</h5>
      <GiftsContainer />
    </div>
  )
}

export default EventTile;
