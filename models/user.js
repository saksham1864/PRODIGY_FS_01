const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
