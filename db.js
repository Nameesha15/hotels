// require('dotenv').config();
const mongoose = require('mongoose');



//define the mongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL = process.env.MONGODB_URL;
//console.log('MongoDB URL:', mongoURL);
const mongoURL = 'mongodb://localhost:27017/hotels';


//set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintain a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', () =>{
    console.log('Connected to Mongodb server.')
});

db.on('error',(err) =>{
    console.log('Mongodb connection error' , err);
});

db.on('disconnected' , () =>{
    console.log('Mongodb disconnected');
});

//Export the database connection
module.exports = db;



