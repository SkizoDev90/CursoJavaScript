//Creamos la exception
let exception
/*le decimos que si no podemos acceder al email no 
se pare el programa sino que aparezca un mensaje
*/
try{
    console.log(exception.email)
    console.log("Todo correcto")
}catch{
    console.log("Error al obtener los datos")
}
//para capturar el error asi nos saldra por pantalla
try{
    console.log(exception.email)
    console.log("Todo correcto")
}catch(error){
    console.log("Error al obtener los datos",error.message)
}

//finally
try{
    console.log(exception.email)
    console.log("Todo correcto")
}catch(error){
    console.log("Error al obtener los datos",error.message)
}finally{
    console.log("Esto se ejecuta siempre")
    //el finally se va a ejecutar salte error o no
}

//lanzar errores
function sum(a,b){
    if(!(a instanceof Number) && !(b instanceof Number)){
        console.log("No se pueden sumar")
    }
    return a+b
}
console.log(sum(5,4))
//throw new Error("Se ha producido un error")