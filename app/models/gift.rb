class Gift < ApplicationRecord
  belongs_to :event

  validates :item, presence: true
  validates :giver, presence: true
  validates :sent, inclusion: [true, false]
  validates :event_id, presence: true
end
