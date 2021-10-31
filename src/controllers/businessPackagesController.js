const express = require('express');
const {NotFound} = require('../utils/errors')
const {getAllBusinessPackages, getBusinessPackageById, saveBusinessPackage} = require('../services/businessPackagesService')


const router = express.Router();


const getHandler = async (req, res, next) => {
     try {
        const businessPackages = await getAllBusinessPackages();
        res.status(200).send(businessPackages);
    } catch (error) {
        return next(error, req, res);
    }
}

const getByIdHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const businessPackage = await getBusinessPackageById(id);
        if (businessPackage) {
            res.status(200).send(businessPackage);
        }
        else {
            throw new NotFound('The package not found by the id: ' + id);
        }
    } catch (error) {
        return next(error, req, res);
    }
};

const postHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const id = await saveBusinessPackage(body);
        res.status(201).send(id);
    } catch (error) {
        return next(error, req, res);
    }
};


router.get('/', getHandler);
router.get('/:id', getByIdHandler);
router.post('/', postHandler);

module.exports = router;