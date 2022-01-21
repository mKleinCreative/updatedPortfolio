require("dotenv").config()
const router = require("express").Router()
const nodemailer = require("nodemailer")


router.post("/contact", (req, res) => {
    let data = req.body;
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "Please fill in all the fields!"})
    }
    let smtpTransporter = nodemailer.createTransport({
        service: "Gmail",
        port:465,
        auth: {
            user: "michaelklein.code@gmail.com",
            pass: `${process.env.PASSWORD}`,
        },
    });
    let mailOptions = {
        from: data.email,
        to: "michaelklein.code@gmail.com",
        subject: `message from ${data.name}`,
        html: `
        <h3>Information</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
    }

    smtpTransporter.sendMail(mailOptions, (error) => {
        try {
            if (error) {
                console.log(error)
                return res.status(400).json({msg: "Please fill all the fields"})
            }
            res.status(200).json({msg: 'Thank you for contacting Michael'})
        } catch (error) {
            if (error) return res.status(500).json({msg: "Server error"})
        }
    })
})

module.exports = router;