const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  useraccount : String ,
  password : String
}
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;