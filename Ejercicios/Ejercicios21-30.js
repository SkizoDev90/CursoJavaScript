1.
for(var i=0;i <= 20;i++){
    console.log(i)
}
console.log("")

2.
var s=0
for(i = 0;i<100 ;i++){
    s=s+i
}
console.log(s)
console.log("")

3.
for(i = 0; i<=50 ;i++){
    if(i%2 == 0){
        console.log(i)
    }
}
console.log("")

4.
const names = ["Bruno","Maria","Luis"]
for(let value of names){ 
    console.log(value)
}
console.log("")

5.
let nombre = "Mariano"
var total = 0
for(i = 0;i < nombre.length; i++){ 
    if(nombre[i]=="a"){
        total++
    }
}
console.log(total)
console.log("")

6.
var numbers = [1,2,3,6,85,32,4]
total = 1
for(value of numbers){
    total=total*value
}
console.log(total)
console.log("")

7.
for(i = 1; i<=10 ;i++){
    console.log(`${i} x 5 = `+ i*5)
}
console.log("")

8.
nombre = "Mariano"
let array=nombre.split("")
var aux
var largo = array.length
for(i = 0;i < largo/2; i++){ 
    aux = array[i]
    array[i] = array[largo-i-1]
    array[largo-i-1] = aux
    console.log(array[largo-i-1])
}
console.log(array.join(""))
console.log("")
//otra forma de invertir
nombre = "Mariano"
let invertido =nombre.split("").reverse().join("")
console.log(invertido)

9.
let a = 0,b = 1
for(let c = 0;c < 10;){
    console.log(b)
    r=a+b
    a=b
    b=r
    c++
}