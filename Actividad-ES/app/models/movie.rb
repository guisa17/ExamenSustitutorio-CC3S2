class Movie < ActiveRecord::Base
  
  validates :director, presence: true

  #### Part 1 ####
  # implement this method. Remeber to exclude [self]
  # (the current movie) from your return value
  def others_by_same_director
    # Your code here #
  end
end
