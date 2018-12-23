class Api::V1::EventsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: Event.all
  end

  def create
    @event = Event.new(event_params)
    @event.user = current_user
    if @event.save
      render json: {event: @event}
    else
      render json: {error: @event.errors.full_messages}
    end
  end

  def event_params
    params.require(:event).permit(:title, :event_date, :description, :user_id)
  end

end
