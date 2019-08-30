class Api::V1::GiftsController < ApplicationController
  def index
    render json: Gift.all  
  end
end
