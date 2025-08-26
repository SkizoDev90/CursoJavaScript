1.
class Tienda{
    constructor(name,superficie){
        this.name=name
        this.superficie=superficie
    }
    get(){
        this.superficie
        this.name
    }
    static Stock(a,b){
        return a+b
    }
}
let newTienda = new Tienda("Aldi",3500)
console.log(newTienda)
console.log(newTienda,Tienda.Stock(5,6))

2.
class Tienda2{
    constructor(name,superficie){
        this.name=name
        this.superficie=superficie
    }
    get(){
        this.superficie
        this.name
    }
    genera(){
        console.log("Genera 125.000 Euros")
    }
}
let newTienda2 = new Tienda2("Aldi",3500)
console.log(newTienda2)
newTienda2.genera()

5.
class Empresa{
    #zona
    constructor(tipo,zona){
        this.tipo=tipo
        this.#zona=zona
    }
    
}
class Tienda3 extends Empresa{
    constructor(name,superficie,tipo,zona){
        super(tipo,zona)
        this.name=name
        this.superficie=superficie
        
    }
    get(){
        this.superficie
        this.name
    }
    set(){
        this.superficie= this.superficie
        this.name= name
    }
    genera(){
        console.log("Genera 125.000 Euros")
    }
}
let Tiendecilla = new Tienda3("Mercadona",23000,"Tienda de Barrio","Valencia") 
console.log(Tiendecilla)

7.
console.log(Tiendecilla.tipo)
Tiendecilla.zona="Andalucia"
console.log(Tiendecilla)




