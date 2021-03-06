class Item < ApplicationRecord
  # Item Class
  # has_many :stories, through: :checkouts
  has_many :checkouts
  has_many :pictures, inverse_of: :item, dependent: :destroy
  belongs_to :category
  accepts_nested_attributes_for :checkouts
  accepts_nested_attributes_for :pictures, allow_destroy: true
  validates :name, :description, :category_id, presence: true
end
