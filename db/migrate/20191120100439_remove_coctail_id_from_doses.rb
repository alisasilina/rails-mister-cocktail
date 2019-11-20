class RemoveCoctailIdFromDoses < ActiveRecord::Migration[5.2]
  def change
    remove_column :doses, :coctail_id
  end
end
