#!/usr/bin/env node
const generateProject = require("./generate/init");

let len=process.argv.length;
const name=process.argv[len-1];

if(process.argv.length<3){
    console.log("\x1b[31m");
    console.log("* no arguments name-app in command line\n");
    console.log("\x1b[36m");
    console.log(">> Write you helping-express generate-project name-app");
    console.log(">> or helping-express g-p name-app");
    console.log("\x1b[0m");
    return;
}
generateProject(name)
