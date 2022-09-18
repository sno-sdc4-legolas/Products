const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

// const productSchema = mongoose.Schema({
//   product_id: Number,
//   name: String,
//   category: String,
//   description: String,
//   features: [
//     {
//       feature_name: String,
//       value: String
//     }
//   ],
//   relatedProducts: Array,
//   defaultPrice: String,
//   Slogan: String,
//   styles: {
//       style_id: Number,
//       styleName: String,
//       salePrice: Number,
//       photos: [
//           {
//               url: String,
//               thumbnail_url: String
//           },
//       ],
//       sku: Array
//   }
// })

// const Product = mongoose.model('Product', productSchema);