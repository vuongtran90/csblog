class Post < ActiveRecord::Base
	has_many :comments, dependent: :destroy
	validates :title, presence: true, length: { minimum: 5}
	validates :body, presence: true
	def self.search(query)
	  where("title like ?", "%#{query}%") 
	end
	belongs_to :user
end
