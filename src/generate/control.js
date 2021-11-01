const fs=require('fs');
const control = require('../code/controls/control');


const generateControl=(name,project)=>{
    const verify=fs.existsSync(`./${project}/src/controllers/${name}Controller.js`);
    if(verify){
        console.log("\x1b[31m"+`**The controller ${name} not cant created \n**Error this controller exists`);
        console.log("\x1b[0m");
        return;
    }
    fs.writeFile(`./${project}/src/controllers/${name}Controller.js`,control.index(name),(err)=>{
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
module.exports=generateControl;