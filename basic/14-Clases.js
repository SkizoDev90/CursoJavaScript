// Clases
let person = {
    name: "kiko",
    numbertlf: 654236541,
    correo: "kiko@hotmail.com"
}

class Person {

    constructor(name,numbertlf,correo){
        this.name=name
        this.numbertlf=numbertlf
        this.correo=correo
    }
}

//sintaxis

let persona = new Person("kiko",654236541,"kiko@hotmail.com")

console.log(persona)

//valores por defecto

class DefaultPerson {

    constructor(name="Sin",numbertlf,correo="Sin Correo"){
        this.name=name
        this.numbertlf=numbertlf
        this.correo=correo
    }
}
let persona2 = new DefaultPerson("Mario",654236541)
console.log(persona2)

//Acceder a las propiedades

console.log(persona2.name)
console.log(persona2["numbertlf"])

persona2.correo="kikomiko69adsad"

console.log(persona2)

//funciones con clases
class PersonWithMethod {

    constructor(name="Sin",numbertlf,correo="Sin Correo"){
        this.name=name
        this.numbertlf=numbertlf
        this.correo=correo
    }
    walk() {
        console.log("Camina")
    }
}

let persona4 = new PersonWithMethod("Mario",654236541)

console.log(persona4)
persona4.walk()

//propiedades privadas 

class PrivatePerson {

    #bank //declaramos la variable dentro de la clase con la #

    constructor(name="Sin",numbertlf,correo="Sin Correo",bank){
        this.name=name
        this.numbertlf=numbertlf
        this.correo=correo
        this.#bank=bank
    }
    pay(){
        this.#bank
    }
}
//no podremos ni imprimirla ni modificarla
let persona5 = new PrivatePerson("Mario",654236541,"Correo@hotmal","IBAN6432464564")
console.log(persona5.bank)

//getters y setters
class GetPerson {
    #name
    #numbertlf
    #correo
    #bank
    constructor(name="Sin",numbertlf,correo="Sin Correo",bank){
        this.#name=name
        this.#numbertlf=numbertlf
        this.#correo=correo
        this.#bank=bank
    }

    get name(){ //con esto permito ver el dato
        return this.#name
    }

    set bank(newBank){ //con esto permitiria modificar el 
                        // iban el cliente sin yo verlo
        this.#bank= newBank
    }
}
let persona6 = new GetPerson("Mario",654236541)
console.log(persona6.name)

persona6.bank= "nuevo IBAN111111111"

console.log(persona6.bank)