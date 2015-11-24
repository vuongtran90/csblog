class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :posts
  def confirm!
    welcome_message
    super
  end

private
  def welcome_message
    UserMailer.welcome_message(self).deliver
  end
end
