const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
    
})

// Define schema methods
const bcrypt = require('bcryptjs');

User.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define pre-hooks for the save method
User.pre('save', function (next) {
    if (!this.password) {
      console.log('models/user.js =======NO PASSWORD PROVIDED=======')
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
      this.password = this.hashPassword(this.password)
      next()
    }
  })

module.exports = User;