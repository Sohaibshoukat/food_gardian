const express = require("express");
const router = express.Router();
const fetchuser = require('../midelware/Fetchuser')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const multer = require('multer');

const User = require("../Model/User");
const path = require('path')


const upload = multer({ storage: multer.memoryStorage() });

const JWT_KEY = "food_gardian_admin";


const PhotosStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(9)
        return cb(null, './uploads/UserProfile');
        console.log(8)
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const PhotosUploader = multer({ storage: PhotosStorage });


const CNICStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads/UserCNIC");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const CNICUploader = multer({ storage: CNICStorage });


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'ipocryptos@gmail.com', // Your Gmail email address
        pass: 'ixbw rudr efft hedl', // Your Gmail app password or an app-specific password
    },
})


const sendEmail = async (Name, Email, Subject, Message, res) => {
    try {

        const mailOptions = {
            from: Email,
            to: "sohaibshoukat94@gmail.com",
            subject: `${Name} | ${Subject}`,
            html: `
        <div><p style="font-size:16px"><span style="font-weight:700;font-size:20px">Name:</span> ${Name}</p></div>
        <div><p style="font-size:16px"><span style="font-weight:700;font-size:20px">Email:</span> ${Email}</p></div>
        <br/>
        <div><p style="font-size:16px"><span style="font-weight:700;font-size:20px">Message:</span> ${Message}</p></div>`
        }

        await transporter.sendMail(mailOptions)

        return {
            status: True
        };
    } catch (error) {
        return {
            status: "Failed",
            message: error.message,
        };
    }
}


router.post("/sendMail", async (req, res) => {
    try {
        const { Name, Email, Subject, Message } = req.body;

        const response = await sendEmail(Name, Email, Subject, Message);

        if (response.status) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred');
    }
});

///////
//API's Start
/////
//Create a user 
router.post("/createuser", async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {

        let user = await User.findOne({ Email: req.body.Email })
        if (user) {
            return res.status(404).json({ success, message: "This Email already exist" })
        }


        const Salt = await bcrypt.genSalt(10);
        const SecPassword = await bcrypt.hash(req.body.Password, Salt)

        user = await User.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Role: req.body.Role,
            Phone: req.body.Phone,
            Password: SecPassword
        })

        const data = {
            user: {
                id: user.id,
            }
        }
        const AuthToken = jwt.sign(data, JWT_KEY);

        success = true;
        res.json({ success, AuthToken, Role: req.body.Role })

    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }
})

//Login a user
router.post("/loginuser", async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { Email, Password } = req.body;

    try {
        let user = await User.findOne({ Email: Email })
        if (!user) {
            return res.status(400).json({ Message: "Account doesn't Fine" })
        }

        const passwordCompare = await bcrypt.compare(Password, user.Password)
        if (!passwordCompare) {
            return res.status(400).json({ Message: "UserName or Password Does not Find" })
        }

        const Payload = {
            user: {
                id: user.id,
            }
        }

        const AuthToken = jwt.sign(Payload, JWT_KEY);
        success = true;

        res.json({ success, AuthToken, Role: user.Role })

    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }
})


//Get User Data
router.get("/getuser", fetchuser, async (req, res) => {
    try {
        let userid = req.user.id;
        const user = await User.findById({ _id: userid });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!user.ProfilePhoto) {
            const userData = { ...user.toObject(), ProfilePhoto: undefined };
            res.json({ success: true, userData: userData });

        } else {
            res.json({ success: true, userData: user });
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }
})

router.get("/getuser/:id", async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });

        if (!user.ProfilePhoto) {
            const userData = { ...user.toObject(), ProfilePhoto: undefined };
            res.json({ success: true, userData: userData });

        } else {
            res.json({ success: true, userData: user });
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }
})

//Get Profile Image
router.get("/getProImg", fetchuser, async (req, res) => {
    try {
        let userid = req.user.id;
        const user = await User.findById({ _id: userid }).select("ProfilePhoto");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!user.ProfilePhoto) {
            res.json({ success: true, ImageData: false });
        } else {
            res.json({ success: true, ImageData: true, user: user });
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('error occured')
    }
})



module.exports = router