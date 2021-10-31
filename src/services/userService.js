const models = require("../models");

const Model = models.User;

const saveUser = async (user) => {
    const item = await Model.findOne({email: user.email});
    if(!item) {
        const model = await Model.createNew(user);
        const savedItem = await model.save();
        return savedItem._id;
    }
};

const getById = async (id) => {
    return await Model.findById(id).populate('Order');
};

module.exports = { saveUser, getById };