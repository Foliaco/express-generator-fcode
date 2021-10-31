#!/usr/bin/env node
const helps=["generate-project"]
const desc=["generate a proyect express whit mysql add name from proyect to end or 'd-p name-project'"]

console.log("¡Helping Express Commands!"+"\x1b[32m"+"\n")

for(let i=0;i<desc.length;i++){
    console.log(" "+helps[i]+"  ->  "+desc[i])
}
console.log("\x1b[0m")

