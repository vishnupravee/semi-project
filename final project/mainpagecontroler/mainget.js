 const mark= require("../schemafunction/schema1")

const getfunction=async(req,res)=>{

    
    const date=await mark.find()
    
    res.json(date)

}
module.exports=getfunction