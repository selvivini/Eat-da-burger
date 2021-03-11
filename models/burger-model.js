const orm = require('../config/orm');


const burger= {
    selectAll(cb){
        orm.selectAll('burgers',(res)=>cb(res))
    },
    insertOne(cols,vals,cb){
        orm.insertOne('burgers', cols, vals, (res)=>cb(res))
   },
   updateOne(objectColVals,condition,cb){
        orm.updateOne('burgers',objectColVals,condition,(res)=>cb(res))
   }
}



module.exports = burger;