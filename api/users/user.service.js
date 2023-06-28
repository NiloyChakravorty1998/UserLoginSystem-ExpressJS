const pool = require('../../config/database');

module.exports = {
  create: async (data, callback) => {
    try {
      const id = Date.now().toString();
      const client = await pool.connect();
      const query = `INSERT INTO registration (firstName, lastName, gender, email, password, number, id) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
      const values = [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        id
      ];

      const result = await client.query(query, values);

      client.release();

      return callback(null, result);
    } catch (error) {
      return callback(error);
    }
  },

  getAll : async(callback) => {
    try {
        const client = await pool.connect();
        const query = `SELECT id, firstname,
        lastname, gender, email,
        number FROM REGISTRATION;`;
        const result = await client.query(query);
        client.release();
        return callback(null,result);
    } catch(error)
    {
        return callback(error);
    }
  },

  updateUserById : async(id,data,callback) => {
    try {
        const userId = id;
        const client = await pool.connect();
        const query = `UPDATE REGISTRATION SET firstname='${data.first_name}',
        lastname='${data.last_name}', gender='${data.gender}', email='${data.email}',
        number='${data.number}' where id = '${userId}';`;
        const result = await client.query(query);
        client.release();
        return callback(null, result);
      } catch (error) {
        return callback(error);
      }
  },

  getUserById : async(id,callback) => {
    try {
      const userId = id;
      const client = await pool.connect();
      const query = `SELECT firstname,
      lastname, gender, email,
      number FROM REGISTRATION where id = '${userId}';`;
      const result = await client.query(query);
      client.release();
      return callback(null, result);
    } catch (error) {
      return callback(error);
    }
  },

  deleteUserById : async (id, callback) => {
    try {
      const userId = id;
      const client = await pool.connect();
      const query = `DELETE FROM REGISTRATION WHERE ID = '${userId}';`;
      const result = await client.query(query);
      client.release();
      return callback(null, result);
    } catch (error) {
      return callback(error);
    }
  }
};
