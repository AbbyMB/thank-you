class Event < ApplicationRecord
  has_many :gifts

  validates :title, presence: true
  validates :event_date, presence: true
end
