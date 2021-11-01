module.exports={
    index:(name)=>{

    return`const ${name}Controller={};


${name}Controller.index=(req,res)=>{
    res.send("Hello world from index ${name}")
}


module.exports=${name}Controller;`}
}