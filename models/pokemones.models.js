const db = require('../util/database');


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
        return db.execute(
            'INSERT INTO pokemon(numero ,nombre,tipo_id, region ,imagen) values (?, ?, ?, ?, ?)', 
            [this.numero,this.nombre, this.tipo, this.region, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
    return db.execute(`
        SELECT p.numero, p.nombre, p.region, p.imagen, t.tipo
        FROM pokemon p
        JOIN tipo t ON p.tipo_id = t.id
    `);
}
    static ordenar_por_numero (){
        return pokemones.sort((a, b) => Number(a.numero) - Number(b.numero));
    }

    static fetchOne(numero) {
    return db.execute(`
        SELECT p.numero, p.nombre, p.region, p.imagen, t.tipo
        FROM pokemon p
        JOIN tipo t ON p.tipo_id = t.id
        WHERE p.numero = ?
    `, [numero]);
}

    static fetch(numero) {
        if (numero) {
            return this.fetchOne(numero);
        } else {
            return this.fetchAll();
        }
    }

    static update(numero, nombre, tipo, region, imagen) {
    return db.execute(
        'UPDATE pokemon SET nombre=?, tipo_id=?, region=?, imagen=? WHERE numero=?',
        [nombre, tipo, region, imagen, numero]
    );
}
}