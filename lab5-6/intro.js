const contrasena = "1234567890"

console.log("La contrasena es: " + contrasena)

const enviarDatos = () => {
    const inputContra = document.getElementById("contrasena")
    const inputVeriContra = document.getElementById("veriContrasena")

    const contra = inputContra.value;
    const veriContrasena = inputVeriContra.value;

    const notiE = document.getElementById("noti");


    if(contra === veriContrasena){
        if(contra === contrasena){
            location.replace("pokemon.html");
        }
        else{
            notiE.innerHTML = `
                <div class="notification is-danger">
                    <button class="delete"></button>
                    Contrasena incorrecta
                </div>
            `
        }
    }
    else{
        notiE.innerHTML = `
            <div class="notification is-warning">
                <button class="delete"></button>
                Las contrasenas ingresadas no son iguales
            </div>
        `
    }
}