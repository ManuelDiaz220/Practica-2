import { promociones } from "../models/promociones.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
promociones.create({
    brand:'Iphone',
    snum:'165453',
    dsrc:'Lo mas freson de lo mas freson',
    price:'15000'
})
export default test