module.exports={
    router:(name)=>{
        return `const ${name}Router=require('express').Router();
const ${name}Controller=require('../controllers/${name}Controller.js');

router.get('/app',${name}Controller.index);
        
module.exports=AppRouter;`
    },
    controller:(name)=>{
        return`const ${name}Controller={};

${name}Controller.index=(req,res)=>{
    res.send("Hello world ${name}Control!");
}
        
module.exports=${name}Controller;`;
    }
}

