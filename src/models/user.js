const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    displayName: { type: String, required: true },
    address: { type: String },
    // token: { type: String },
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'order'}], 
    email: { type: String, required: true, unique: true }
});

const User = mongoose.model("User", userSchema);

User.createNew = async (user) => {
        user._id = new mongoose.Types.ObjectId();
        const model = new User(user);
        return model;
};

module.exports = User;