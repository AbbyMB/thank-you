class Event < ApplicationRecord
  has_many :gifts
  belongs_to :user 

  validates :title, presence: true
  validates :event_date, presence: true
end
