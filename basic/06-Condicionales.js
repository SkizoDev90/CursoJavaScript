//condicionales if, else if, else

let age = 20
if(age > 20){
    console.log("Es mayor")
}else if(age == 20){
    console.log("Es igual")
}else{"Es menor"}

//operadores ternarios

const message = age == 20 ? "Es igual" : "No es igual"
console.log(message)

//switch

let day = 8
let dayname

switch(day){
    case 0:
        dayname = "Lunes"
        break
    case 1:
        dayname = "Martes"
        break
    case 2:
        dayname = "Miercoles"
        break
    case 3:
        dayname = "Jueves"
        break
    case 4:
        dayname = "Viernes"
        break
    case 5:
        dayname = "Sabado"
        break
    case 6:
        dayname = "Domingo"
        break
    default : 
        dayname = "Numero erroneo"
}
console.log(dayname)
