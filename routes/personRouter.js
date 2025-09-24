const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//post route to add a person
router.post('/', async (req , res) =>{
    try {
        const data = req.body

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('Data Saved');
        res.status(200).json(response);
    
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

})

//GET method to get the person data
router.get('/', async(req , res)=>{
    try{
        const data = await Person.find();
         console.log('Data Fetch');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

//
router.get('/:worktype', async (req , res) =>{
    try {
        const worktype = req.params.worktype ; //Extract the work from the URL parameter
    //validation
    if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
        const response = await Person.find({work : worktype});
        console.log('response fetched');
        res.status(200).json(response);
    }else{
        res.status(404).json({error: 'Invailid work type'});
    }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})


//update
router.put('/:id' , async (req , res) => {
    try {
        const personId = req.params.id;//Extract the id from the URL parameters
        const updatePersonData = req.body;//Updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatePersonData,{
            new : true,//return the update document
            runValidators : true//Run mongoose validation
        })

        if(!updatePersonData){
            return res.status(404).json({error : 'Person not Found '});
        }

        console.log('data response');
        res.status(200).json(response);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    
    }
})

//DETELE operation
router.delete('/:id' , async (req , res)=>{
    try{
        const personId = req.params.id;//Extract the person's Id from URL parameters.

        //Assuming you have a Person model.
        const response = await Person.findByIdAndDelete(personId);
        if (!response){
            return res.status(404).json({error: 'Person not found'}); 
        }
        console.log('Data Deleted');
        res.status(200).json({message : 'Person Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})



module.exports = router;