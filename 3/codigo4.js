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

//metodos accesores : getters y setters

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color); //los hereda de la clase animal
        this.raza = null;
    }
    // setter: sirve para modificar informacion
    set setRaza(newName){
        this.raza = newName;
    }
    // getter : para obtener informacion
    get getRaza(){
        return this.raza;
    }
}

//En la mayoria de los lenguajes los getter y setters se usan 
//para acceder a propiedades privadas o en caso de javascript
// para acceder a datos encapsulados

const perro = new Perro("perro",5,"rojo","doberman");
const gato = new Animal("gato",3,"gris");
const pajaro = new Animal("pajaro",2,"azul");

perro.setRaza = "pedro"; //funciona como propiedad
perro.setRaza = "jorge";
document.write(perro.getRaza)