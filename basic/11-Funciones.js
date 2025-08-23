//funciones


function myFun(){
    console.log("Hola que tal")
}

myFun()

//con parametros

var name = "kiko"
function myFunPara(){
    console.log(`Hola , ${name}`)
}

myFunPara(name)


//funciones flecha

const FuncionGuardada=function myFunPara(){
    console.log(`Hola , ${name}`)
}

//foreach

myArray = [1,2,3,4]

myArray.forEach(function(value){
    console.log(value)
})
myArray.forEach((value) => console.log(value))