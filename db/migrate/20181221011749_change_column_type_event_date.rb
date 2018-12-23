class ChangeColumnTypeEventDate < ActiveRecord::Migration[5.2]
  def self.up
    change_column :events, :event_date, :string
  end

  def self.down
    change_column :events, :event_date, 'date USING CAST(event_date AS date)'
  end
end
