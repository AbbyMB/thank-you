class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.date :event_date, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
