class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie},tengo ${this.edad} años y soy de color ${this.color}.`;

    }
    verInfo() {
        document.write(this.info + "<br>")
    } 
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color); //los hereda de la clase animal
        this.raza = raza;
    }
    //metodo estatico: no necesita que la clase se defina para ser creado
    static ladrar(){ //puede ser estático ya que no usa ningun elemento del constructor
        alert("Waf")
    }
}

Perro.ladrar() //funciona aunque no se haya definido ningun objeto de esa clase
// si no se pone "static" da un error 