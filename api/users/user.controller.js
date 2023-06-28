const { create, getAll, updateUserById, getUserById, deleteUserById } = require('./user.service');
const {genSaltSync, hashSync} = require('bcrypt')

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
    }
}