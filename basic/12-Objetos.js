//sintaxis
let person = {
    name: "kiko",
    numbertlf: 654236541,
    correo: "kiko@hotmail.com"
} 
console.log(person.name) 

//para eliminar propiedades 
delete person.correo
console.log(person) 

//para añadir propiedades 
person.alias = "Fran"
console.log(person) 

//añadir funciones
let person1 = {
    name: "kiko",
    numbertlf: 654236541,
    correo: "kiko@hotmail.com",
    walk: function(){
        console.log("la persona camina")
    }
} 
person1.walk()

//anidar objetos
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
console.log(person3.walk())

//igualdad
let person4 = {
    name: "kiko",
    numbertlf: 654236541,
    correo: "kiko@hotmail.com"
}
let person5 = {
    name: "kiko",
    numbertlf: 654236541,
    correo: "kiko@hotmail.com"
}
console.log(person4)
console.log(person5)
//la comparacion no puede ser en bloque tiene que ser por propiedad
console.log(person5.correo == person4.correo)

//iterar para ello debemos acceder por las claves

for(let key in person4){
    console.log(key + ":"+person4[key])
}

