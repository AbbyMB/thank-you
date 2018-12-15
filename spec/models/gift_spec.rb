require 'rails_helper'
require_relative '../../app/models/gift'

RSpec.describe Gift, type: :model do
  describe "valid gift" do
    let!(:event) { Event.create(title: "Kiki's birthday", event_date: Date.parse("Apr 20 2019"), description: "Party to celebrate Kiki's birthday") }

    it "Is valid with attributes" do
      gift_new = Gift.new(item: "collar", giver: "Missy", email: "missy@gmail.com", sent: false, event_id: event.id)
      expect(gift_new).to be_valid
    end

    it "Is not valid without an item" do
      no_item = Gift.new(giver: "Missy", email: "missy@gmail.com", sent: false, event_id: event.id)
      expect(no_item).to_not be_valid
    end

    it "Is not valid without a giver" do
      no_giver = Gift.new(item: "collar", email: "missy@gmail.com", sent: true, event_id: event.id)
      expect(no_giver).to_not be_valid
    end

    it "Is valid without an email" do
      no_email = Gift.new(item: "collar", giver: "Missy", sent: false, event_id: event.id)
      expect(no_email).to be_valid
    end

    # it "Is not valid without a sent" do
    #   no_sent = Gift.new(item: "collar", giver: "Missy", email: "missy@gmail.com", event_id: event.id)
    #   expect(no_sent).to_not be_valid
    # end
  end
end
