class CreateRewiews < ActiveRecord::Migration[6.0]
  def change
    create_table :rewiews do |t|
      t.string :title
      t.string :description
      t.integer :score
      t.belongs_to :dish, null: false, foreign_key: true

      t.timestamps
    end
  end
end
