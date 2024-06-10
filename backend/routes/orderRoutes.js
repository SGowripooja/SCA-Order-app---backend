// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Route to handle form submission
router.post('/submit-order', async (req, res) => {
    try {
        const { shopname, date, products } = req.body;
        const order = new Order({
            shopname,
            date,
            products
        });
        await order.save();
        res.status(201).json({ message: 'Order submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

// Route to fetch submitted orders
router.get('/submitted-orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching orders.' });
    }
});

// Route to delete an order
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        console.log("the error is " + order)
        if (!order) {
            return res.status(404).json({ error: 'Order not found.' });
        }
        res.status(200).json({ message: 'Order deleted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the order.' });
    }
});

module.exports = router;
