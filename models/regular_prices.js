
//Mongodb to hold user detail and wallet balance. 

const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegularPricesSchema = new Schema({
  priceName: {
    type: String,
    required: true
  },
  priceValue: {
    type: mongoose.Schema.Types.Decimal128,
    required: false
  }
});
const regularPrices = mongoose.model('regularPrices', RegularPricesSchema);
module.exports = regularPrices
