
class Celulares{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    prender(){
        if (this.encendido = false){
            alert("Celular prendido");
            this.encendido = true;
        } else { 
            alert("El celular ya está encendido");
        }
    }
}