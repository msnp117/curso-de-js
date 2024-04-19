
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
    // ladrar(){
    //     if (this.especie == "perro"){
    //         document.write("¡Waw! <br>");
    //     } else {
    //         document.write("No puede ladrar, ya que es un " + this.especie + "<br>");
    //     }
    // }
}
//HERENCIA: tomar todo de la clase anterior y agregarle otras cosas
//  no puede haber un objeto con el mismo nombre de una clase
class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color); //los hereda de la clase animal
        this.raza = raza;
    }
    ladrar(){
        alert("Waf")
    }
}

const perro = new Perro("perro",5,"rojo","doberman");
const gato = new Animal("gato",3,"gris");
const pajaro = new Animal("pajaro",2,"azul");

perro.ladrar()
gato.ladrar() //da un error 
pajaro.verInfo()


// abstraccion: reducir el objeto a sus componentes básicos
// modularidad: resolver un problema grande separandolo por partes
// encapsulamiento: proteger los datos para que no sean accesibles para los usuarios
// polimorfismo: distintos comportamientos de los objetos de acuerdo a sus propiedades
