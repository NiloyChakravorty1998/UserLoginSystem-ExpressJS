const { create, getAll, updateUserById, getUserById, deleteUserById, getUserByEmail } = require('./user.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt')
const { sign } = require('jsonwebtoken')
module.exports ={
    createUser: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        create(body,(err, results) => {
            if(err)
            {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
            }
            return res.status(200).json(
                {
                    success: 1,
                    data: results
                }
            )

        })
    },
    getAllUser : (req,res) => {
        getAll((err,results) => {
            if(err)
            {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
            }
            return res.status(200).json(
                {
                    success: 1,
                    data: results
                }
            )
        })
    },
    updateUser : (req,res) => {
        const userId= req.params.id;
        const body = req.body;
        updateUserById(userId,body,(err,results) => {
            if(err)
            {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
            }
            return res.status(200).json(
                {
                    success: 1,
                    data: results
                }
            )

        })
    },

    getUser : (req, res) => {
        const userId = req.params.id;
        getUserById(userId,(err, results) => {
            if(err)
            {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
            }
            return res.status(200).json(
                {
                    success: 1,
                    data: results
                }
            )
        })
    },

    deleteUser : (req,res) => {
        const userId = req.params.id;
        deleteUserById(userId,(err,results) => {
            if(err)
            {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "database connection error"
            })
            }
            return res.status(200).json(
                {
                    success: 1,
                    data: results
                }
            )
        })
    },

    login : (req,res) => {
        const email = req.body.email;
        const password = req.body.password;
        getUserByEmail(email, (err,results) => {
            if(err)
            {
                console.log(err);
            }
            if(!results)
            {
                return res.json({
                    success : 0,
                    data : 'invalid email or password'
                })
            }
            
            
            const comparePassword = compareSync(password,results.rows[0].password);
            if(comparePassword)
            {
                results.rows[0].password = undefined;
                const jsonToken = sign({
                    result: results.rows[0]}, process.env.API_KEY, {
                        expiresIn: "1h"
                    });
                return res.json({
                    success:1,
                    message: "login successfull",
                    token: jsonToken
                });     
            } else {
                return res.json({
                    success:0,
                    message: "invalid email or password",
                    token: jsonToken
                })
            }
        });
    }
}