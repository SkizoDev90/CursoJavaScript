1.
function Sum(a,b) {
    return a+b
}
var resulta= Sum(5,2)
console.log(resulta)

2.
let numbers = [4,76,2,34,5,2]
let largo = numbers.length
function buscar(numbers,largo){ 
    var m = numbers[0]
    for(let i=0;i<=largo;i++){
        if(numbers[i]>m){
            m=numbers[i]
        }
    }
    return m
}
resulta=buscar(numbers,largo)
console.log(resulta)

3.
let name = "Mariano"
let vocales="aeiouAEIOU"
function contar(name){
    let c=0
    for(let i of name){
        if(vocales.includes(i)){
            c++
        }
    }
    return c
}
resulta=contar(name)
console.log(resulta)

4.
let arrayNames=["Felipe","Luis","Mariano","Maria"]
let aux=[]
function cambiarNa(arrayNames,aux){
    largo= arrayNames.length
    for(let i=0;i<largo;i++){
        aux[i]=arrayNames[i].toLocaleLowerCase()
    }
    return aux
}
namesMinus=cambiarNa(arrayNames,aux)
console.log(namesMinus)
