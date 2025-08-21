//////////////////// Declaracion
let mySet = new Set()
/*los set tienen que inicializarse con el new Set y si 
quieres meter varios elementos como se representa abajo sino....
*/
mySet=new Set(["hola","que","tal"])
console.log(mySet)
// aparecera el primer elemento divido
mySet=new Set("hola","que","tal")
console.log(mySet)

////////////////////metodos comunes

//add ,delete
mySet.add(4)
console.log(mySet)

//para el delete necesitamos indicarle el elemento no sirve con el indice
mySet.delete("l")
console.log(mySet)

//has comprobar que existe un elemento
console.log(mySet.has(4))

//para comprobar el tamaño se utiliza size
console.log(mySet.size)

//convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

//converitr un array a set
mySet = new Set(myArray)
console.log(mySet)