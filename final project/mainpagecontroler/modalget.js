const mark= require("../schemafunction/schema1")

const getmodalfunction=async(req,res)=>{

    
    const date=await mark.find({modalimage})
    console.log(modalimage);
    res.json(date)

}
module.exports=getmodalfunction