class CreateGifts < ActiveRecord::Migration[5.2]
  def change
    create_table :gifts do |t|
      t.string :item, null: false
      t.string :giver, null: false
      t.string :email
      t.boolean :sent, default: false
      t.belongs_to :event 


      t.timestamps null: false
    end
  end
end
