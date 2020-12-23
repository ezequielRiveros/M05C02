const fs=require('fs');
const productos=JSON.parse(fs.readFileSync('./src/data/productsDataBase.json','UTF-8'))

module.exports={
    "getIndex": function(req, res, next) {
        let inSaleProducts=productos.filter(producto => {
            return producto.category ==="in-sale";
        })
        let visitedProducts=productos.filter(producto => {
            return producto.category ==="visited";
        })
        res.render('index', {'insale':inSaleProducts , 'visited':visitedProducts})
    }
}