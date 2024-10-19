let a = 5
let b = 5
let c = 5
let Addtions = a + b + c

let d = 5
let e = 4
let f = 6

let subtraction = d - e - f

let g = 4
let h = 6

let division = g / h

let i = 7
let j = 9 
let k = 8

let multiplication = j * i * k

let z = 6
let y = 10

let modulo = z % y


document.getElementById("Addtions").innerHTML = ` ${a} + ${b} + ${c}  = ${Addtions}`;
document.getElementById("Subtraction").innerHTML = ` ${d} - ${e} - ${f}  = ${subtraction}`;
document.getElementById("Multiplication").innerHTML = ` ${a} * ${b} * ${c}  = ${multiplication}`;
document.getElementById("Division").innerHTML = ` ${g} / ${h} = ${division}`;
document.getElementById("Modulo").innerHTML = ` ${z} % ${y} = ${modulo}`;
