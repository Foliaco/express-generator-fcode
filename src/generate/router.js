#!/usr/bin/env node
const fs=require('fs');
const router = require('../code/controls/router');


const generateRouter=(name,project)=>{
    const verifyRoute=fs.existsSync(`./${project}/src/router/${name}Router.js`);
    if(verifyRoute){
        console.log("\x1b[31m"+`**The router ${name} not cant created \n**Error this router exists`);
        console.log("\x1b[0m");
        return;
    }
    fs.writeFile(`./${project}/src/router/${name}Router.js`,router.router(name),(err)=>{
        if(err){
            console.log("\x1b[31m"+`**Th router ${name} not cant created \n**Error is ${err.message}`);
            console.log("\x1b[0m");
            return;
        }
        else{
            console.log("\x1b[36m"+"The router "+name+" created");
            console.log("\x1b[0m");
            return;
        }

    })
    const verify=fs.existsSync(`./${project}/src/controllers/${name}Controller.js`);
    if(verify){
        console.log("\x1b[33m"+`**Controller ${name} exist`);
        console.log("\x1b[0m");
        return;
    }
    else{
        fs.writeFile(`./${project}/src/controllers/${name}Controller.js`,router.controller(name),(err)=>{
            if(err){
                console.log("\x1b[31m"+`**Th controller ${name} not cant created \n**Error is ${err.message}`);
                console.log("\x1b[0m");
                return;
            }
            else{
                console.log("\x1b[36m"+"The controller "+name+" created");
                console.log("\x1b[0m");
                return;
            }
    
        })
    }
}
module.exports=generateRouter;