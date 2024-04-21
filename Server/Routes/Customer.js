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

// Get all food items
router.get('/food', async (req, res) => {
    try {
        const allFood = await Food.find();
        res.json({ food: allFood });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a single food item by ID
router.get('/food/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Food not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});





module.exports = router