const models = require("../models");
const {NotFound} = require('../utils/errors')

const Model = models.Order;

const getAllOrders = async () => {
  const orders = await Model.find();
  console.log(orders);
  return orders;
};

const getOrderById = async (id) => {
  const order = await Model.findById(id).populate('user');
  return order;
};

const saveOrder = async (order) => {
  const item = await Model.create(order);
  return item.id;
};

const updateOrder = async (id) => {
  const item = await Model.findById(id);
  if (item) {
    item.status = item.status === "pending" ? "approved" : "pending";
    await item.save();
    return item.id;
  }
   throw new NotFound('Order not found by the id: ' + id);
};

const deleteOrderById = async (id) => {
    const item = await Model.findById(id);
    if(item) {
        await Model.deleteOne({_id: id})
    }
    throw new NotFound('Order not found by the id: ' + id);
};

module.exports = {
    getAllOrders,
    getOrderById,
    saveOrder,
    updateOrder,
    deleteOrderById
}
