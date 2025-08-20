//String

let myName = "Kiko"
let saludo = "Hola, " + myName + "!!"
console.log(saludo)

// ver el tamaño del texto
console.log(saludo.length)

// acceso a caracteres 
console.log(saludo[3])

//metodos de cadenas
console.log(saludo.toLocaleLowerCase())
console.log(saludo.toLocaleUpperCase())
console.log(saludo.indexOf("!!"))
console.log(saludo.includes("Hola"))
console.log(saludo.slice(0,7))
console.log(saludo.replace("Hola","Adios"))

/*Template (plantillas) con las comillas invertidas podemos
introducir cadena con salto de linea o podemos introducir una variable*/
let message = `Hola, 
que tal`
console.log(message)
console.log(`Hola, ${myName}`)
//aqui comparo si el largo de una variable es igual al variable de la otra

console.log(myName.length == message.length)