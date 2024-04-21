const express = require("express");
const router = express.Router();
const fetchuser = require('../midelware/Fetchuser')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const multer = require('multer');

const User = require("../Model/User");
const path = require('path');
const Food = require("../Model/FoodMenu");


const upload = multer({ storage: multer.memoryStorage() });

const JWT_KEY = "food_gardian_admin";


const PhotosStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(9)
        return cb(null, './uploads/Food');
        console.log(8)
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const PhotosUploader = multer({ storage: PhotosStorage });

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'ipocryptos@gmail.com', // Your Gmail email address
        pass: 'ixbw rudr efft hedl', // Your Gmail app password or an app-specific password
    },
})

///////
//API's Start
/////


router.post('/food', fetchuser, PhotosUploader.single('foodimg'), async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "Your Have No-Access for this" });
        }

        let userid = req.user.id;
        let path = req.file.path;
        const newFood = new Food({
            Pic: path,
            FoodTitle: req.body.FoodTitle,
            Price: req.body.Price,
            Description: req.body.Description,
            ExpiryDate: req.body.ExpiryDate,
            Calories: req.body.Calories,
            Rating: req.body.Rating,
            Type: req.body.Type,
            User_id: userid,
        });
        const savedFood = await newFood.save();
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all food items
router.get('/food', fetchuser, async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "Your Have No-Access for this" });
        }
        const allFood = await Food.find({ User_id: req.user.id });
        res.json({food:allFood});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a single food item by ID
router.get('/food/:id', fetchuser, async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "Your Have No-Access for this" });
        }
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a food item by ID
router.put('/food/:id', fetchuser,PhotosUploader.single('foodimg'), async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "Your Have No-Access for this" });
        }
        let path = req.file ? req.file.path: req.body.pic;

        const updated = {
            Pic: path,
            FoodTitle: req.body.FoodTitle,
            Price: req.body.Price,
            Description: req.body.Description,
            ExpiryDate: req.body.ExpiryDate,
            Calories: req.body.Calories,
            Rating: req.body.Rating,
            Type: req.body.Type,
        };

        const updatedFood = await Food.findByIdAndUpdate(req.params.id, updated, {
            new: true,
            runValidators: true,
        });
        if (!updatedFood) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.json(updatedFood);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a food item by ID
router.delete('/food/:id', fetchuser, async (req, res) => {
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "Your Have No-Access for this" });
        }

        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if (!deletedFood) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.json({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error Occur' });
    }
})




module.exports = router