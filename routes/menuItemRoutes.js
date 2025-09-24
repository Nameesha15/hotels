const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

//post method to add a Menu Item 
router.post('/' ,async (req , res) => {
    try {
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Interal Server error'});
    }
})

//GET method to get the Menu Item 
router.get('/' , async (req ,res)=>{
    try {
        const data = await MenuItem.find();
        console.log('data Fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


router.get('/:taste', async (req , res) =>{
    try {
        const  tastetype = req.params.taste ; //Extract the taste from the URL parameter
    //validation
    if(tastetype == 'sweet' || tastetype == 'spicy' || tastetype == 'sour'){
        const response = await MenuItem.find({ taste : tastetype});
        console.log('response fetched');
        res.status(200).json(response);
    }else{
        res.status(404).json({error: 'Invailid  taste type'});
    }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})


//comment added for testing purpose .
module.exports = router;