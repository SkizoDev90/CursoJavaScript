//declarar array
let t = [5,"hola"]
let t2 = new Array (1)

console.log(t)
console.log(t2)

myArray= new Array(2)
myArray[1]= "kiko"
myArray[0]= "Hola,"

console.log(myArray)

//metodos comun
myArray = []

//push y pop

myArray.push("hola")
myArray.push("que")
myArray.push("tal")
console.log(myArray)

//el pop elimina el ultimo elemento y lo devuelve
console.log(myArray.pop())
console.log(myArray)

//shift elimina el primero elemento y lo devuelve
console.log(myArray.shift())
console.log(myArray)

//ver el tamaño del array
console.log(myArray.length)

myArray.push("hola","que","tal")

//slice muestra desde una posicion a otra
let aux=myArray.slice(0,2)
console.log(aux)

/*splice quita los elementos que le digamos el primer digito
te dice desde que elemento partes y el segundo cuantos elementos 
quieres quitar 
*/
myArray.push("hola","que","tal",45)
let aux2=myArray.splice(1,2)
console.log(aux2)