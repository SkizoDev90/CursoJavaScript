let t = [1,2,3,4,5]

let person = {
    name: "kiko",
    numbertlf: 654236541,
    correo: "kiko@hotmail.com"
} 

//sintaxis arrays

let [myvalue0,myvalue1,myvalue2]= t
console.log(myvalue1)
console.log(myvalue0)
//Asi asigno varios valores de un array a diferences variables

//sintaxis objets
let {name,numbertlf}=person //la diferencia es que tiene que ser entre {}
console.log(name)           // es decir debe tener la misma estructura
console.log(numbertlf)

//objets anidados
let person3 = {
    name: "kiko",
    numbertlf: 654236541,
    correo: "kiko@hotmail.com",
    walk: function(){
        //para hacer referencia utilizar this
        console.log(`la persona llamada ${this.name} camina`)
    },
    job:{
        nombre: "estudiante",
        exp : 1
    }
} 

let {job:{nombre:trabajo},job:{exp:anios}}=person3

console.log(trabajo)
console.log(anios)

//propagacion

//sintaxis array

let tCopia = [...t, 6]

console.log(tCopia)

//asi propagas dos array
let tCopia2=[...tCopia,...t]

console.log(tCopia2)

//sintaxis objets

let persona5={...person3,...tCopia2}
console.log(persona5)