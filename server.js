// function add(a,b){
//     return a+b;
// }

// var add = function(a , b){
//     return a+b;
// }

// var add =(a,b) =>{return a+b;}

// var result = add(2,3);
// console.log(result);

// function callback(){
//     console.log('nameesha is calling a call back function ');
// }

// const add = function (a, b ,callback){
//     var result = a+b;
//     console.log('result:' +result);//main function work complete.
//     callback();
// } 

// add (3,4 , callback);

// jab bhi humko kisi jich ki require hoti hai to isko ese likhte hai 
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi '+user.username + '!', ()=>{
//     console.log('File is created.');
// });

// //os kya kya kr skta hai 
// console.log(os);
// console.log(fs);


//import the notes.js file
// const notes = require('./notes.js');
// var  underscore   = require ('lodash');
// console.log('server file is available');

// var age = notes.age;


// var result = notes.addnumber(age+18 , 20);
// console.log(age);
// console.log('result is now' +result);

// var data = ["person" , "person" , 1 , 2 , 1 , 2 , 'name' , 'age' , '2'];
// var filter = underscore.uniq(data);
// console.log(filter);

//convert to json string to object
// const jsonString = '{"name": "nameesha","age" :30 , "city" : "dhamtari"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// //convert to object to json string
// const objectToConvert = {
//     name : "nameesha",
//     age : 23
// }
// const json = JSON.stringify(objectToConvert);
// console.log(json);


//server create karna 
// require('dotenv').config();
const express = require('express')
const app = express() //express ko import kiya hai aap == naksha ya blue print / express ka instence 
const db = require('./db');




const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.Body
const PORT = process.env.PORT || 3000;

//Middleware function
// const logRequest = (req , res, next) => {
//     console.log(`${new Date().ToLocalString()} Request Made to : ${req.originalUrl}`);
//     next(); //move on to the next phase
// }


app.get('/'  ,function (req , res){ // '/' ka mtlab kon se end point par show krna hai .
    res.send('Welcome to our Hotel.')
})


//import the router files 
const personRouter = require('./routes/personRouter');
const MenuItemRoutes = require('./routes/menuItemRoutes');


//Use the routers
app.use('/person', personRouter); 
app.use('/menu', MenuItemRoutes); 


app.listen(PORT , ()=>{
    console.log('listening on port 3000');
})