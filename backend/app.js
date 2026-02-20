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

function problema_TwoSum (nums, target) {
    respuesta = [];
    for(let i = 0; i < nums.length; i++){
        let j = i + 1;
        while(j != i){
            if((nums[i] + nums[j]) == target){
                respuesta = [i, j];
                return respuesta;
            }
            j = (j + 1) % nums.length; 
        }
    }
    return respuesta;
}

const http = require('http');

const server = http.createServer ( (request, response ) => {
    console.log(request.url);
    // 1
    arr = [13,43,56,34];
    console.log(arreglo(arr));

    // 2
    str = "Buentas tardes";
    texto(str);

    // problema mio
    nums = [3,7,2,8,6,1]
    target = 10;
    respuesta = problema_TwoSum(nums, target);
    console.log(nums[respuesta[0]] + " + " + nums[respuesta[1]] + " = " + target);

    response.end();
})


server.listen(3000);