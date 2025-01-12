const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  }
})
const user = Mongoose.model("user", UserSchema);
module.exports = user;