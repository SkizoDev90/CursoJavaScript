1.
let t=["leon","pajaro","foca","delfin"]
console.log(t)

2.
t.push("ballena","loro")
console.log(t)

3.
console.log(t[2])

4.
let mySet = new Set(["libro1","libro2","libro3","libro4","libro5"])
console.log(mySet)

5.
mySet.add("libro6")
mySet.add("libro7")
console.log(mySet)

6.
mySet.delete("libro3")
console.log(mySet)

7.
let mapMes= new Map([
    ["Enero",1],
    ["Febrero",2],
    ["Marzo",3]
])
console.log(mapMes)

8.
console.log(mapMes.has("Febrero",2));

9.
let arrayMes=["Julio","Agosto"]
mapMes.set("Verano",arrayMes)
console.log(mapMes)

10.
let t2=["maria","dolores"]
let setT2 = new Set(t2)
console.log(setT2)
let mapFinal = new Map()
mapFinal.set("Array",setT2)
console.log(mapFinal)