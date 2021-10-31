module.exports = {
    index: `require('dotenv').config();
const express=require('express');
const path=require('path');
const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//statics
app.use('/public',express.static(path.join(__dirname,'public')));

//engine template
app.set('views','./views');
app.set('view engine','ejs');

//routers
app.use('/',require('../router/index.js'));

app.listen(process.env.PORT,()=>{
    console.log('server on port %s',process.env.PORT);
})
`,
    router: `const router=require('express').Router();
const HomeController=require('../controllers/HomeController');

router.get('/',HomeController.index);

module.exports=router;`,
    controller:`const HomeController={};
//remove commets for enable database whit mysql->MariaDB
//const DB=require('../DB/index.js');
    
HomeController.index=(req,res)=>{
    res.render('home');
}

module.exports=HomeController;`,
    database:`require('dotenv').config();
const mysql=require('mysql');
const DB=mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT||3306,
    database:process.env.DB_NAME,
    password:process.env.DB_PASS
});
DB.connect((err)=>{
    if(err){
        console.error("Error Connect",err);
        return;
    }
    console.log("\x1b[36m");
    console.log("connect database success");
    console.log("\x1b[0m");
})
module.exports=DB;`,
    json:(name)=>{
        return`{
    "name": "${name}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start":"nodemon src/index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
    "dotenv": "^10.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "mysql": "^2.18.1"
    },
    "devDependencies": {
      "nodemon": "^2.0.13"
    }
}`
    },
    env:(name)=>{
        return`DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_DATBASE=${name}
DB_PASS=
PORT=4000`
    }
};




