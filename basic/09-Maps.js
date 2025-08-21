//map

//declaracion
let myMap = new Map()
console.log(myMap)
//inicializar

myMap = new Map([
    ["name","kiko"],
    ["age",35]
])
console.log(myMap)

//metodos y propiedades

/*set añade al mapa y se añadimos una clave que ya estaba con otro
valor se sustituye
*/
myMap.set("alias","fran")
console.log(myMap)
myMap.set("alias","doro")
console.log(myMap)

//get para mostrar la key o el value que le pidas
console.log(myMap.get("alias"))

//has para saber si existe o no
console.log(myMap.has("age",35))

//delete
myMap.delete("alias")
console.log(myMap)

//clear limpias todo el mapa
//myMap.clear()

//size
console.log(myMap.size)