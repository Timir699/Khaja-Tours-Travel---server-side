const models = require("../models");

const Model = models.BusinessPackages;

const getAllBusinessPackages = async () => {
    const businessPackages = await Model.find();
    return businessPackages
}

const getBusinessPackageById = async (id) => {
    const businessPackage = Model.findById(id);
    return businessPackage
}

const saveBusinessPackage = async (businessPackage) => {
    const item = await Model.create(businessPackage);
    return item.id
}

module.exports = {
    getAllBusinessPackages,
    getBusinessPackageById,
    saveBusinessPackage,
}
