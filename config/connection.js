const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
<<<<<<< HEAD
      host: '127.0.0.1',
=======
      host: 'localhost',
>>>>>>> 8b0f3a42e23b58e5fac21ca2359ce0d6d43ab40d
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
