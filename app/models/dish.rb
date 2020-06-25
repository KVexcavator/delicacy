class Dish < ApplicationRecord
  has_many :rewiews

  before_create :slugify
  
  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    rewiews.average(:score).round(2).to_f
  end
end
