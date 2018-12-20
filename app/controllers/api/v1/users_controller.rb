class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    
  end

  def show
    render json: User.find(params[:id])
  end

end
