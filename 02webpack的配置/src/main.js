
//使用commonjs的模块化规范
const {add,mul}=require('./js/mathUtils.js')
console.log(add(20,30))
console.log(mul(20,30))

//使用es6的模块化的规范
import{name,age,height} from './info'
console.log(age)
console.log(name)
console.log(height)
