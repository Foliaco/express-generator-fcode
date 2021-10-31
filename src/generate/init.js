const fs=require('fs');
const copy=require('recursive-copy');
const path=require('path');
const files =require('../code/initials/index')

const generateProject=(name)=>{
   createMkdir(name,`./${name}`,true);
   createMoreMkdir("src",`./${name}/src`,false);
   createMoreMkdir("database",`./${name}/src/database`,false);
   createMoreMkdir("controllers",`./${name}/src/controllers`,false);
   createMoreMkdir("routers",`./${name}/src/router`,false);

   createFiles(files.json(name),`./${name}/package.json`);
   createFiles(files.env(name),`./${name}/.env`);

   createFiles(files.index,`./${name}/src/index.js`);
   createFiles(files.database,`./${name}/src/database/index.js`);
   createFiles(files.controller,`./${name}/src/controllers/HomeController.js`);
   createFiles(files.router,`./${name}/src/router/router.js`);
   
   copyFolderCreate(name,"public")
   copyFolderCreate(name,"views")

}

const copyFolderCreate=(name,folder)=>{
    copy(path.join(__dirname,'../code/initials/'+folder),`./${name}/src/${folder}`,(err,res)=>{
        if(err){
            console.log("* There a directory with name\n* Restar process");
        }
        else{
            console.log("\x1b[36m");
            console.log(`+ The folder ${name} created +`);
            console.log("\x1b[0m");
            return;
        }
    })
}

const createFiles=(data,path)=>{
    fs.writeFile(path,data,(err)=>{
        if(err){
            console.log("\x1b[31m"+"*The file no created error is fs->",err.code)
            return;
        }
        else{
            console.log("\x1b[36m"+"+The file created success+")
            console.log("\x1b[0m");
            return;
        }
    })
}

const createMkdir=(name,path,init)=>{
    fs.mkdir(path,(err)=>{
        if(err){
            if(err.code==="EEXIST"){
                console.log("\1b[31m"+"* There a directory with name\nCode error is "+err.code);
                if(init){
                    console.log("\1b[31m"+"***Deleting folders***");
                    fs.unlink(path,(err)=>{
                        if(err){
                            console.log("\1b[31m"+"not can't delete",err)
                            return;
                        }
                        else{
                            console.log("\1b[31m"+"Deleted success")
                            return
                        }
                    })
                }
                console.log("\x1b[0m");
                return;
            }
            console.log("There a error at create folder "+name+"\nThe code error is "+err.code)
            console.log("\x1b[0m");
            return;
        }
        else{
            console.log("\x1b[36m"+`+ The folder ${name} created`);
            console.log("\x1b[0m");
            return;
        }
    })
}

const createMoreMkdir=(name,path)=>{
    fs.mkdir(path,(err)=>{
        if(err){
            if(err.code==="EEXIST"){
                console.log("\1b[31m"+"* There a directory with this name\nCode error is "+err.code);
                console.log("\x1b[0m");
                return;
            }
            console.log("\1b[31m"+"There a error at create folder "+name+"\nThe code error is "+err.code)
            console.log("\x1b[0m");
            return;
        }
        else{
            console.log("\x1b[36m"+`The folder ${name} created`);
            console.log("\x1b[0m");
            return;
        }
    })
}

module.exports = generateProject;