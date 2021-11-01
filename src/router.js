#!/usr/bin/env node
const generateRouter=require('./generate/router');
let len=process.argv.length;

const name=process.argv[len-2];
const project=process.argv[len-1];

if(len<4){
    console.log("\x1b[31m");
    console.log("* No name router in command line\n");
    console.log("\x1b[36m");
    console.log(">> Write you helping-express namerouter nameproject");
    console.log(">> or helping-express g-p namerouter nameproject");
    console.log("\x1b[0m");
    return;
}
generateRouter(name,project)