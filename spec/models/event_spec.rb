require 'rails_helper'

RSpec.describe Event, type: :model do
  describe "valid event" do
    let!(:user) { User.create(email: "bob@bob.com", password: "888888") }

    it "Is valid with attributes" do
      event_new = Event.new(title: "Kiki's birthday", event_date: 4/20/19, description: "Party to celebrate Kiki's birthday", user_id: user.id)
      expect(event_new).to be_valid
    end

    it "Is not valid without a title" do
      no_title = Event.new(event_date: 4/20/19, description: "Party to celebrate Kiki's birthday", user_id: user.id)
      expect(no_title).to_not be_valid
    end

    it "Is not valid without an event date" do
      no_event_date = Event.new(title: "Kiki's birthday", description: "Party to celebrate Kiki's birthday", user_id: user.id)
      expect(no_event_date).to_not be_valid
    end

    it "Is valid without a description" do
      no_description = Event.new(title: "Kiki's birthday", event_date: 4/20/19, user_id: user.id)
      expect(no_description).to be_valid
    end
  end
end
