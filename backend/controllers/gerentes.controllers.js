import { gerentes } from "../models/gerentes.models.js";
const test = (()  =>{
    console.log('el controladoor de gerentes funciona')
})
gerentes.create({
    name:'Gustavo',
    apep:'Tonto',
    apema:'Antonio',
    age:'18'
})
export default test