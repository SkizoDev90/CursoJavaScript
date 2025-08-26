//Herencia

class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sound(){
        console.log("Emite sonido")
    }
}

class Dog extends Animal{

    constructor(name,age){
        super(name,age)
    }
    run(){
        console.log("Corre")
    }
}

let mydog= new Dog("Brais",10)

console.log(mydog)
mydog.sound()
mydog.run()

//metodos estaticos
class Math{
    static sum(a,b){
        return a+b
    }
}

console.log(Math.sum(5,2))
