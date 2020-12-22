const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://admin:admin@localhost:5433/eques') // Example for postgres

async function check () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
check()