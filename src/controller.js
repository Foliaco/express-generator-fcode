#!/usr/bin/env node
const generateControl=require('./generate/control');
let len=process.argv.length;

const name=process.argv[len-2];
const project=process.argv[len-1];

if(len<4){
    console.log("\x1b[31m");
    console.log("* No name controller in command line\n");
    console.log("\x1b[36m");
    console.log(">> Write you helping-express namecontroller nameproject");
    console.log(">> or helping-express g-p namecontrol nameproject");
    console.log("\x1b[0m");
    return;
}
generateControl(name,project)