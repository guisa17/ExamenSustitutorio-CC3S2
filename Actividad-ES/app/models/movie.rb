class Movie < ActiveRecord::Base
  
  # validates :director, allow_nil: be_true

  #### Part 1 ####
  # implement this method. Remeber to exclude [self]
  # (the current movie) from your return value
  def self.others_by_same_director(director, id)
    # Your code here #
    where(director: director).where.not(id: id)
  end
end
