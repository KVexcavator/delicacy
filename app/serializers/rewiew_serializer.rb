class RewiewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :dish_id
end
