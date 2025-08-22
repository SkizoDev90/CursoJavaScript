//for
for (var i=0;i<5;i++){
    console.log(`hola ${i}`)
}

const t = [1,2,3,4,5]

for (var i=0;i<t.length;i++){
    console.log(`Elemento ${t[i]}`)
}

//while

let b = 0
while(b < 5){
    console.log(`Hola ${b}`)
    b++
}

//do
i = 0
do{
    console.log(`Hola ${i}`)
    i++
}while(i < 5)

//for of asi podemos recorrer arrays set o map 
let myMap = new Map([
    ["name","kiko"],
    ["age",35]
])
for (let valor of myMap){
    console.log(valor)
}
//break y continue

for (b = 0;b < 5 ; b++){
    if(b == 2){
        continue
    }else if(b == 3){
        break
    }
    console.log(`Hola ${b}`)
}