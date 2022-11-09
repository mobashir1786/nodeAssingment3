module.exports=middleWare=(req, res, next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }
    else if(req.query.age<18){
        res.send("you are not eligible");
    }
    else{
         next();
    }
   
}