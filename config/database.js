// config/database.js
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://konthamsrija3939:123@employeeclusterdb.o8jt5.mongodb.net/EmployeeDatabase?retryWrites=true&w=majority&appName=EmployeeClusterDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;