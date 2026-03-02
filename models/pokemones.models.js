const pokemones = [
    {
        numero: "001" ,
        nombre: "Bulbasaur",
        tipo: `<span class="tag is-success">Planta</span>
                    <span class="tag is-purple">Veneno</span>`,
        region: "Kanto",
        imagen: "https://art.pixilart.com/b25ec9eb49f290a.png",
    },
    {
        numero: "004" ,
        nombre: "Charmander",
        tipo: `<span class="tag is-danger">Fuego</span>`,
        region: "Kanto",
        imagen: "https://art.pixilart.com/c79ce0ff92ae322.png",
    },
];

module.exports = class pokemonesModel {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_numero, mi_nombre, mi_tipo, mi_region, mi_imagen) {
        this.numero = mi_numero;
        this.nombre = mi_nombre;
        this.tipo = mi_tipo;
        this.region = mi_region;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        pokemones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return(pokemones);
    }
    static ordenar_por_numero (){
        return pokemones.sort((a, b) => Number(a.numero) - Number(b.numero));
    }
}