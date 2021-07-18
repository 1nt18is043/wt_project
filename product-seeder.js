var Product = require("../models/product")

var mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB_URI, { useMongoClient: true })

var products = [
  new Product({
    imagePath: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-adenium-plant-desert-rose-red-plant_267x267.jpg?v=1610017245",
    title: "Adenium Plant, Desert Rose (Red)",
    description:
      " ",
    price: 600
  }),
  new Product({
    imagePath: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-capsicum-mix-color-bell-pepper-misticanza-vegetable-seeds-16969062580364_267x267.jpg?v=1601350841",
    title: "1+1 Free - Capsicum Mix Color, Bell Pepper Misticanza - Vegetable Seeds",
    description:
      " ",
    price: 140
  }),
  new Product({
    imagePath: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-orange-fruit-santra-grafted-plant-16969145090188_267x267.jpg?v=1601351101",
    title: "Orange Fruit Plant",
    description:
      " ",
    price: 500
  }),
  new Product({
    imagePath: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-5-fortune-teller-cactus-plants-pack_600x600.jpg?v=1617437980",
    title: "5 Fortune teller cactus plants pack",
    description:
      " ",
    price: 2000
  }),
  new Product({
    imagePath: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-pack-seeds-set-of-18-easy-to-grow-flower-seeds-16969316630668_600x600.jpg?v=1601346690",
    title: "Set of 18 Easy to Grow Flower Seeds",
    description:
      " ",
    price: 150
  }),
  new Product({
    imagePath: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-my-organic-garden-plant-protection-and-enhancer-kit-16969040691340_267x267.jpg?v=1601346753",
    title: "Organic Garden (Plant Protection and Enhancer Kit)",
    description:
      " ",
    price: 1400
  })
]

var done = 0
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++
    if (done === products.length) {
      exit()
    }
  })
}

function exit() {
  mongoose.disconnect()
}


