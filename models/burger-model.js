const orm = require('../config/orm');

// creating all  data models
const burger= {
    // for getting all records
    selectAll(cb){
        orm.selectAll('burgers',(res)=>cb(res))
    },
    // for adding a new record
    insertOne(cols,vals,cb){
        orm.insertOne('burgers', cols, vals, (res)=>cb(res))
   },
   //updating an existing record
   updateOne(objectColVals,condition,cb){
        orm.updateOne('burgers',objectColVals,condition,(res)=>cb(res))
   }
}



module.exports = burger;