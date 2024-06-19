const dark = require("../schemafunction/schema2")


const cartgetfunction=async(req,res)=>{

    
    const date=await dark.find()
    
    res.json(date)

}
module.exports=cartgetfunction