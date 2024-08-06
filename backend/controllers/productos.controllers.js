import { productos } from "../models/productos.models.js";
const test = (() =>{
    console.log('el controlador de productos funciona')
})

productos.create({
    brand:'OPPO',
    snum:'837238',
    dscr:'De lo mejor calidad precio',
    price:'8000'
})
export default test