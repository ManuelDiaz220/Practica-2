import { clientes } from "../models/clientes.models.js";

const test = (() =>{
    console.log('funciona el controlador de clientes')
})
clientes.create({
    name:'Juanito',
    apep:'Alcachofa',
    apema:'Perez',
    age:'69',
    bdc:'en buro de credito',
    acnum:'637787282'
})
export default test