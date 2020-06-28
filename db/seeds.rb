dishes = Dish.create([
  {
    name: "Fried chicken" ,
    image_url: "https://png.pngtree.com/png-clipart/20190921/original/pngtree-a-bowl-of-hot-roast-chicken-free-illustration-png-image_4715992.jpg"
  },
  {
    name: "Plastic sandwich",
    image_url: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-burger-vector-illustration-with-simple-black-line-design-burger-icon-fast-png-image_5225332.jpg"
  },
  {
    name: "Smoked fish",
    image_url: "https://png.pngtree.com/png-clipart/20190925/original/pngtree-grilled-fish-in-a-dish-mapped-photograph-png-and-eps-png-image_4961795.jpg"
  }
])

rewiews = Rewiew.create([
  {
    title: "Great dish",
    description: "I had a lovely time,",
    score: 5,
    dish: dishes.first
  },
  {
    title: "Bad dish",
    description: "I had a bad time.",
    score: 1,
    dish: dishes.first
  }
])
