class Movie < ActiveRecord::Base
  
  attr_accessor :title, :rating, :description, :director, :release_date

  #### Part 1 ####
  # implement this method. Remeber to exclude [self]
  # (the current movie) from your return value
  def others_by_same_director
    # Your code here #
  end
end
