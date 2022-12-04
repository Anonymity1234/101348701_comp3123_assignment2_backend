//We are creating the userModel object with the request body.
//We are saving the userModel object with the save() method.
//The status code 201 is for the created user.
//The status code 500 is for the server error.

// This is a Node.js module that provides a set of tools for creating a web application.
const express = require('express')

// This module contains the database model for the user data.
const userModel = require('../models/userModel');

// This is used to define a set of routes for the web application.
const routes = express.Router()

//This is for creating a new route for signup and it uses http post method.
routes.post('/signup', async (req, res) => {
    console.log('in signup');
    //This try block is used for catching errors.
    try {

        // This creates a new user instance and saves it in the database.
        const newUser = new userModel(req.body)
        await newUser.save()

        // If the user is created successfully, then the response is sent with the status code of 201.
        res.status(201).json({
            created_user: newUser
        });

        console.log('signup successful');
        return;

        // If there is any error, then this catch block will run and send the response with the status code of 500.
    } catch (err) {
        console.error('error during signup', err);
        res.status(500).send({
            "status": false, "message": err.message
        })
    }
});



// The line above is a query to the database to find a user that matches the username sent in the request body.
// If there is an error with the query, it will throw an error.
routes.post('/login', async (req, res) => {
    try {
        console.log("I am here and here and here")
        userModel.findOne({ username: req.body.username }, (err, user) => {
            console.log("I am here inside userMode.fineOne method")

            if (err) throw err
            console.log("I am here inside if (err) throw err")
            // If the user is not found in the database, the response will send a status of 500 and a message saying that the credentials could not be verified.
            if (user == null) {
                console.log("I am here inside if (user == null)")
                res.status(500).send({
                    "status": false, "message": "Cannot verify credentials with that username and password."
                })
                console.log("I am here inside on line 56")


                // If the user is found, the password is verified with the verifyPassword method.
                // If the password is a match, a response is sent with a status of 200 and a message saying the user has logged in successfully.
                // If the password does not match, a response is sent with a status of 500 and a message saying the credentials could not be verified.
            } else {
                console.log("I am here inside on line 63")
                user.verifyPassword(req.body.password, (err, isMatch) => {
                    console.log("I am here inside on line 65")

                    if (err) throw err
                    console.log("I am here inside on line 68")

                    if (isMatch) {
                        console.log("I am here inside on line 71")

                        res.status(200).send({
                            "status": true, "username": req.body.username, "message": "User logged in successfully."
                        })
                        console.log("I am here inside on line 76")

                    } else {
                        console.log("I am here inside on line 79")

                        res.status(500).send({
                            "status": false, "message": "Cannot verify credentials with that username and password."
                        })
                        console.log("I am here inside on line 84")

                    }
                }); 
                console.log("I am here inside on line 88")

            } 

        })

    } catch (err) {
        console.log("I am here inside on line 93")

        res.status(500).send({
            "status": false, "message": err.message
        })
        console.log("I am here inside on line 98")

    }
});

// Show all users for testing purposes

// This declares a new route that will be listening for GET requests at the /users endpoint.
// The function passed into the route (async(req, res) => {}) will be executed when the route is hit.
// The function is declared as async, meaning that it will return a promise.
routes.get('/users', async (req, res) => {

    // The try block will attempt to run the code inside of it.
    try {

        //This will find all of the users in the database and store them in the allUsers constant.
        // The await keyword is used because the find() method returns a promise.
        const allUsers = await userModel.find()

        // This line will send a response back to the client with a status code of 200 (success) and the all_users data.
        res.status(200).send({
            all_users: allUsers
        })

        // The catch block will execute if there is an error in the try block.
    } catch (err) {

        // If there is an error, this line will send a response back to the client with a status code of 500 (internal server error) and an error message.
        res.status(500).send({
            "status": false, "message": err.message
        })
    }
});

// This is exporting the routes variable, which contains the route information, to be used in another file.
module.exports = routes