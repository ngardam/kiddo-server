const jwt = require("jsonwebtoken")
require("dotenv").config
const { Login } = require ("../models")
const router = require("express").Router();
const bodyParser = require("body-parser")


// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));


router
    .route("/password/forgot")
    .post(async (req, res) => {
        console.log(req.body)
        const userEmail = req.body.email
        console.log(`input: `, userEmail)

        if (userEmail !== ""){
            const user = await Login.findOne({email: userEmail})
            // const responseData = await databaseResponse

            if (user){
    
                res.status(200).send({message : `user found`})
            } else {
                res.status(400).send({message : "no account found matching that email"})
            }

        } else {
            res.status(400).send({ message : `email field is empty`})
        }
        

    })

module.exports = router