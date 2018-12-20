class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :event_date, :description, :user_id 
end
