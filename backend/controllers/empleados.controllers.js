import { empleados } from "../models/empleados.models.js";
const test = (()  =>{
    console.log('el controladoor de empleados funciona')
})
empleados.create({
    name:'Manuel',
    apep:'Diaz',
    apema:'Lopez',
    age:'20'
})
export default test