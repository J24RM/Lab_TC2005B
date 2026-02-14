function activarInciso(num) {

    if (num === 1) {
        alert("Inciso 1:\nSe pedirá un número y se mostrará una tabla con números del 1 hasta el número dado con sus cuadrados y cubos.");
        inciso1();
    }

    else if (num === 2) {
        alert("Inciso 2:\nSe generarán dos números aleatorios y deberás calcular su suma. Se medirá el tiempo que tardas.");
        inciso2();
    }

    else if (num === 3) {
        alert("Inciso 3:\nEste inciso recibe un arreglo desde la consola.\n\nEjemplo de uso:\ninciso3([1, -2, 0, 5, -8, 0]);\n\nFormato: números separados por coma dentro de corchetes.");
    }

    else if (num === 4) {
        alert("Inciso 4:\nEste inciso recibe una matriz desde la consola.\n\nEjemplo de uso:\ninciso4([[1,2,3],[4,5,6],[7,8,9]]);\n\nFormato: matriz = arreglo de arreglos.");
    }

    else if (num === 5) {
        alert("Inciso 5:\nSe pedirá un número y se mostrará invertido.");
        inciso5();
    }

    else if (num === 6) {
        alert("Inciso 6:\nProblema: Sistema de control de inventario.\n\nUna tienda desea calcular el total de piezas disponibles en todas sus sucursales y mostrar el stock por talla (S, M, G).\nSe utiliza una clase Producto con constructor y dos métodos.");
        inciso6();
    }
}




const inciso1 = () => {
    const respuesta = prompt("Escribe un numero: ")
    for(let i = 1; i <= respuesta; i++){
        document.writeln("Numero: " +i + " Cuadrado: " + i*i + " Cubo: " + i*i*i + "<br> " )
        
    }
}


const inciso2 = () => {
    let num1 = Math.floor(Math.random() * 10);


    let num2 =  Math.floor(Math.random() * 10);

    let inicio = Date.now();

    const respuesta = prompt("Cual es la suma de: " + num1 + " + " + num2)

    let fin = Date.now();

    let tiempo = (fin - inicio) / 1000;

    if(respuesta == num1+num2){
        document.write("Respuesta Correcta")
    }
    else{
        document.write("Respuesta incorrecta")
    }

    document.write("<br> Tiempo: " + tiempo + " segundos");

}


const inciso3 = (arreglo) => {

    let ceros = 0;

    let positivos = 0;

    let negativos = 0;

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] == 0){
            ceros += 1;
    }
        else if(arreglo[i] < 0){
            negativos += 1;
        }
        else{
            positivos += 1;
        }
    }

    document.writeln(" Ceros: " + ceros + " Positivos: " + positivos + " Negativos: " + negativos + "<br>");
    
}

const inciso4 = (matriz) => {
    let respuesta = [];

    for(let i = 0; i < matriz.length; i++){
        let suma = 0;
        let fila = matriz[i];

        for(let j = 0; j < fila.length; j++){
            suma += fila[j];
        }

        let promedio = suma / fila.length;
        respuesta.push(promedio)
    }

    document.writeln("Promedios: " + respuesta);

}

const inciso5 = () => {
    const respuesta = prompt("Escribe un numero: ")
    
    respuesta.toString();

    let newrespuesta = respuesta.split("");

    let respuesatfinal = []
    let j = 0;
    for(let i = newrespuesta.length - 1; i > -1; i--){
        respuesatfinal[j] = newrespuesta[i];

        j++;
    }

    const respuestafinalfinal = respuesatfinal.toString()

    document.write("Numero invertido: " + respuestafinalfinal); 
}

const inciso6 = () => {

    class Producto{
        constructor(nombre, precio, stock){
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
        }

        totalpiezas(){
            let suma = 0
            for(let i = 0; i < this.stock.length; i++){
                let fila = this.stock[i];
                for(let j = 0; j < fila.length; j++){
                    suma += fila[j];
                }
            }
            document.write("Total de stock en todas las sucursales: " + suma);
        }

        piezasTalla(){
            
            for(let i = 0; i < this.stock.length; i++){
                let fila = this.stock[i];
                let S = fila[0];
                let M = fila[1];
                let G = fila[2];

                document.write("<br>" + "Sucursal " + (i+1) + "<br>");
                document.write("S: " + S + " M: " + M + " G: " + G);
            }
        }
    }

    let p1 = new Producto("Playera", 299, [
        [5, 3, 2],
        [2, 4, 1],
        [0, 6, 3]
    ]);

    p1.totalpiezas();
    p1.piezasTalla();
    
}

