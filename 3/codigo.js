
class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`

    }
    verInfo() {
        document.write(this.info + "<br>")
    } 
}

const perro = new animal("perro",5,"rojo");
const gato = new animal("gato",3,"gris");
const pajaro = new animal("pajaro",2,"azul")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
// document.write(perro.info);
// document.write(gato.info);
// document.write(pajaro.info);