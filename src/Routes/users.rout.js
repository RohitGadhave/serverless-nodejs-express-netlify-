const router = require('express').Router();

router.get('/',(req,res)=>{
    res.json({"message":"User"});
});
router.get('/1',(req,res)=>{

    res.json({"message":"1"});
});
router.get('/list',(req,res)=>{

    res.json({"message":"1"});
});
router.get('/user/:id',(req,res)=>{
    let id = req.params.id
    //console.log(id)
    res.json({"input":id});
});

module.exports= router;