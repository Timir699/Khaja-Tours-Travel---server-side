const express = require('express');
const { saveUser, getUserById } =  require("../services/userService");
const { NotFound } = require('../utils/errors');

const router = express.Router();


const getByIdHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if (user) {
            res.status(200).send(user);
        }
        else {
            throw new NotFound('User not found by the id: ' + id);
        }
    } catch (error) {
        return next(error, req, res);
    }
};

const postHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const id = await saveUser(body);
        res.status(201).send(id);
    } catch (error) {
        return next(error, req, res);
    }
};



router.get('/:id', getByIdHandler);
router.post('/', postHandler);


module.exports = router;