const sizes = [
  {
    name: "Small",
    size: 6,
    price: 0
  },
  {
    name: "Medium",
    size: 8,
    price: 0
  },
  {
    name: "Large",
    size: 12,
    price: 0
  },
  {
    name: "Extra-Large",
    size: 16,
    price: 0
  }
];

const flavors = [
  {
    "name": "Vanilla",
    "description": "A rich and aromatic flavor made from vanilla beans, providing a sweet and creamy base that's perfect for pairing with a variety of toppings and sauces.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Chocolate",
    "description": "A bold and indulgent flavor made from cocoa, offering a deep, sweet chocolate taste that complements many toppings and desserts.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Strawberry",
    "description": "A fruity, sweet, and slightly tangy flavor that brings the essence of fresh strawberries to your dessert, perfect for a refreshing and summery treat.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Mango",
    "description": "A tropical and sweet flavor that captures the juicy richness of ripe mangoes, offering a vibrant and exotic taste that's perfect for warm weather.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Peach",
    "description": "A sweet, juicy, and slightly tart flavor that embodies the taste of ripe peaches, perfect for adding a fruity and refreshing touch to any dessert.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Coconut",
    "description": "A creamy, rich flavor that captures the essence of tropical coconut, offering a sweet and nutty taste that adds a smooth texture to desserts.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Coffee",
    "description": "A bold, rich flavor with a slightly bitter, roasted taste that captures the essence of freshly brewed coffee, perfect for coffee lovers looking for a pick-me-up in their dessert.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Pineapple",
    "description": "A sweet and tangy tropical flavor that evokes the juicy essence of fresh pineapple, offering a refreshing and slightly tart taste that's perfect for summer treats.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Green Tea",
    "description": "A subtle, earthy flavor with a slightly grassy and refreshing taste, offering a unique and calming option for those looking for a lighter, more sophisticated flavor.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Blueberry",
    "description": "A sweet and slightly tangy flavor that captures the taste of fresh blueberries, offering a fruity and vibrant option that pairs well with many toppings.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Banana",
    "description": "A creamy and naturally sweet flavor that brings the taste of ripe bananas to your dessert, perfect for those who love smooth and rich fruity flavors.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Lemon",
    "description": "A bright, zesty, and tangy flavor that brings the refreshing tartness of lemons to your dessert, offering a sharp contrast to creamy or sweet toppings.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  },
  {
    "name": "Caramel",
    "description": "A rich, sweet flavor with a buttery and slightly toasted sugar taste, offering a smooth and indulgent treat that pairs wonderfully with both fruity and creamy toppings.",
    "amounts": {
      "1": { "price": 2.50 },
      "2": { "price": 4.00 },
      "3": { "price": 5.50 }
    }
  }
];

const solidToppings = [
  {
    name: "Chocolate Chips",
    description: "Small, round pieces of chocolate that melt easily, adding a sweet and rich chocolate flavor to ice cream, cookies, and baked goods."
  },
  {
    name: "Rainbow Sprinkles",
    description: "Colorful, tiny sugar granules that add a fun, crunchy texture and vibrant look to your desserts, perfect for ice cream, cupcakes, and donuts."
  },
  {
    name: "Crushed Oreos",
    description: "Crumbled Oreo cookies that add a chocolatey crunch and a sweet cream filling flavor, ideal for topping ice cream, cakes, or milkshakes."
  },
  {
    name: "Granola",
    description: "A mix of oats, nuts, and sweeteners like honey or brown sugar, toasted to a crunchy texture. It adds a wholesome, slightly sweet crunch to yogurt or desserts."
  },
  {
    name: "Chopped Nuts (Almonds, Walnuts, Pecans)",
    description: "Chopped pieces of various nuts like almonds, walnuts, and pecans, offering a crunchy, earthy flavor that adds texture and richness to ice cream and baked goods."
  },
  {
    name: "Fresh Strawberries",
    description: "Juicy, sweet, and slightly tangy red berries that provide a refreshing burst of flavor when added to desserts, smoothies, or yogurt."
  },
  {
    name: "Fresh Blueberries",
    description: "Tiny, sweet, and tangy berries that offer a burst of natural sweetness, perfect for topping desserts, yogurt, or adding to pancakes."
  },
  {
    name: "Sliced Bananas",
    description: "Fresh, sweet banana slices that add a creamy texture and naturally sweet flavor, great for topping ice cream, cereal, or blending into smoothies."
  },
  {
    name: "Gummy Bears",
    description: "Chewy, colorful gummy candies shaped like bears, offering a fruity and sweet taste, often used to add a fun, chewy contrast to your dessert."
  },
  {
    name: "Shredded Coconut",
    description: "Fine shreds of dried coconut that provide a tropical, slightly sweet and nutty flavor, perfect for sprinkling on ice cream, cakes, or granola."
  },
  {
    name: "Marshmallows",
    description: "Soft, fluffy, and sweet puffs made from sugar and gelatin, perfect for adding a light, airy texture and sweetness to desserts like hot chocolate or s'mores."
  },
  {
    name: "Peanut Butter Cups",
    description: "Small cups made from peanut butter and coated in milk or dark chocolate, offering a sweet and salty flavor that adds a rich, nutty bite to ice cream or brownies."
  },
  {
    name: "Reese's Pieces",
    description: "Candy-coated chocolate candies filled with peanut butter, offering a sweet, nutty flavor and a crunchy exterior that’s perfect for sprinkling over desserts."
  },
  {
    name: "Brownie Bites",
    description: "Small chunks or pieces of moist, fudgy brownies that add a rich chocolate flavor and dense texture to your dessert, perfect for mixing into ice cream."
  },
  {
    name: "Mini M&Ms",
    description: "Miniature versions of the classic candy-coated chocolates, offering a colorful and crunchy addition to any dessert, ideal for ice cream, cupcakes, or cookies."
  },
  {
    name: "Pretzel Pieces",
    description: "Crunchy, salty pieces of pretzel, adding a savory and salty contrast to the sweetness of ice cream or desserts, perfect for a sweet-and-salty combination."
  },
  {
    name: "Chia Seeds",
    description: "Tiny, nutrient-packed seeds that become gelatinous when mixed with liquid, offering a mild, nutty flavor and a crunchy texture, perfect for topping yogurt or smoothies."
  },
  {
    name: "Dried Cranberries",
    description: "Sweet and tart dried cranberries that provide a chewy texture and a burst of fruit flavor, ideal for adding to granola, yogurt, or ice cream."
  },
  {
    name: "Cinnamon Toast Crunch",
    description: "Crispy, cinnamon-sugared cereal pieces that add a sweet, spiced crunch to desserts, ideal for sprinkling on top of ice cream or blending into milkshakes."
  }
];

const liquidToppings = [
  {
    name: "Chocolate Syrup",
    description: "A smooth, sweet syrup made from cocoa and sugar, perfect for drizzling over desserts, ice cream, or even in milk for a classic chocolate milk treat."
  },
  {
    name: "Caramel Sauce",
    description: "A rich and buttery syrup with a sweet, slightly burnt sugar flavor that enhances desserts like ice cream, cakes, and pies."
  },
  {
    name: "Strawberry Syrup",
    description: "A fruity, vibrant red syrup made from fresh strawberries and sugar, ideal for topping pancakes, ice cream, or adding to milkshakes for a sweet berry flavor."
  },
  {
    name: "Honey",
    description: "A natural sweetener made by bees from flower nectar, offering a floral, golden sweetness that pairs beautifully with fruits, yogurt, tea, or even drizzling over baked goods."
  },
  {
    name: "Whipped Cream",
    description: "A light, airy topping made from heavy cream and sugar, whipped into soft peaks, adding a fluffy and sweet finishing touch to desserts, hot beverages, and fruit dishes."
  },
  {
    name: "Peanut Butter Sauce",
    description: "A creamy, nutty sauce made from peanut butter and sugar, offering a sweet and savory flavor that pairs wonderfully with ice cream, brownies, and other baked goods."
  },
  {
    name: "Marshmallow Cream",
    description: "A sweet, gooey spread made from marshmallows and sugar, offering a soft, smooth texture and a marshmallow flavor perfect for drizzling over sundaes or using as a dip."
  },
  {
    name: "Butterscotch Sauce",
    description: "A rich, golden sauce with a buttery, caramel-like flavor made from brown sugar, butter, and vanilla, often used to enhance the flavor of ice cream or warm desserts."
  },
  {
    name: "Nutella",
    description: "A creamy, hazelnut chocolate spread with a rich, sweet flavor that's perfect for drizzling on pancakes, waffles, or used as a dip for fruits or pastries."
  },
  {
    name: "Sweetened Condensed Milk",
    description: "A thick, sweetened milk that’s been evaporated to a concentrated form, often used in desserts for a creamy, sugary base or drizzled over pies and fruit salads."
  },
  {
    name: "Coconut Cream",
    description: "A rich, smooth cream made from the flesh of coconut, adding a tropical flavor with a creamy texture, often used in cocktails, desserts, or as a dairy-free alternative to whipped cream."
  },
  {
    name: "Vanilla Sauce",
    description: "A smooth, sweet sauce made with vanilla beans or vanilla extract, providing a creamy, aromatic flavor perfect for pairing with puddings, cakes, or fresh fruit."
  },
  {
    name: "Hot Fudge",
    description: "A thick, warm chocolate sauce made with cocoa, sugar, and butter, perfect for melting over ice cream or any dessert needing a rich, chocolatey finish."
  },
  {
    name: "Mango Puree",
    description: "A smooth, tropical fruit puree made from ripe mangoes, offering a sweet, tangy flavor that’s great for topping desserts, drizzling on pancakes, or using in smoothies."
  },
  {
    name: "Blueberry Sauce",
    description: "A rich, slightly tangy sauce made from blueberries, sugar, and lemon, ideal for drizzling over cheesecakes, ice cream, or pancakes for a fruity twist."
  }
];

export {sizes, flavors, solidToppings, liquidToppings}
