const express = require('express');
const burger = require('../models/burger-model')

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
//for getting all data when hit the base url
router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const hbsObject = {
        burgers: data,
      };
      
      res.render('index', hbsObject);
    });
  });
// for posting a new burger
  router.post('/api/burgers', (req,res)=>{
   burger.insertOne(['burger_name'],[req.body.burger_name],(result)=>{
     res.json({id: result.insertId})
   });
  });
// for updating the burger
  router.put('/api/burgers/:id',(req,res)=>{
    const  condition = `id= ${req.params.id}` 
    console.log('condition', condition)
    burger.updateOne({devoured: req.body.devoured},condition, (result) =>{
      
      if(result.changedRows === 0){
        return res.status(404).end()
      }
      res.status(200).end()
    } )
  })

















// Export routes for server.js to use.
module.exports = router;