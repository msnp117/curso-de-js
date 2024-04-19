let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let op = parseInt(prompt("Suma:1 Resta:2 Division:3 Multiplicacion:4"));

const sumar = (num1, num2)=>{
    return num1+num2;
}
const restar = (num1, num2)=>{
    return num1-num2;
}
const dividir = (num1, num2)=>{
    return num1/num2;
}
const multiplicar = (num1, num2)=>{
    return num1*num2;
}

switch (op) {
    case 1:
        alert(sumar(num1,num2));
        break;
        
    case 2:
        alert(restar(num1,num2));
        break;

    case 3: 
        alert(dividir(num1,num2));
        break;

    case 4:
        alert(multiplicar(num1,num2));
        break;

    default:
        alert("Operación incorrecta")
        break;
}