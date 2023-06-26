const pool = require('../../config/database');

module.exports = { 
    create: async (data,callback) =>
{
const client = await pool.connect();
const result = await client.query(`insert into registration(firstName, lastName, gender,
    email, password, number) values(??????)`, [
        data.first_name,
        data.last_name,
        data.gender, 
        data.email,
        data.password,
        data.number
    ],
    (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null,results);
        }
    );
 }
};