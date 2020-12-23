const fs=require('fs');
const productos=JSON.parse(fs.readFileSync('./src/data/productsDataBase.json','UTF-8'))

module.exports={
    "getProduct": function(req,res, next) {
        let producto =productos.filter(producto => {
            return producto.id == req.params.id && producto.category == req.params.category
        }).reduce((result,product)=> {
            result=product
        })
        
        res.render('productDetail', {'producto':producto})
    }
}