const data = require("../Data")

const specific=(req,res)=>{
    const specificData=data.filter(item=>item.category==req.params.catogary)
      res.send(specificData)
}
const alldata=(req,res)=>{
 res.send(data)
}
module.exports={specific,alldata}