console.log("Hola Mundo");

const filesystem = require('fs');

function arreglo(arr) {
    promedio = 0;
    for(let i = 0; i < arr.length; i++){
        promedio += arr[i];
    }

    promedio = promedio / arr.length;

    return promedio;
}

function texto(str){
    filesystem.writeFileSync('node.txt' , str)
}

const http = require('http');

const server = http.createServer ( (request, response ) => {
    console.log(request.url);
    arr = [13,43,56,34];
    console.log(arreglo(arr));
    str = "Buentas tardes";
    texto(str);
    response.end();
})


server.listen(3000);