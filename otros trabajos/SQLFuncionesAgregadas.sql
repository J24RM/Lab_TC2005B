/*
Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco (título, año, nombre, sueldo)
Actor (nombre, dirección, telefono, fechanacimiento, sexo)
Productor (idproductor, nombre, dirección, teléfono)
Estudio (nomestudio, dirección)
*/

/*
El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.
*/

select nombre ,sum(sueldo) as 'Total de Ingreso'
FROM Elenco
group by nombre
order by SUM(Sueldo) desc


/*
El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.
*/

select nomestudio, sum(presupuesto) as 'Presupuesto Total'
from Pelicula
where año between 1980 and 1989
group by nomestudio
orden by SUM(presupuesto) desc


/*
Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película.
*/

select  A.nombre, AVG(E.sueldo) as 'Promedio Sueldo'
from Actor A, Elenco E
where A.nombre = E.nombre and A.sexo = "hombre" 
group by A.nombre
having AVG(E.sueldo) >= 5000000
order by AVG(E.sueldo) desc

/*
 Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto).
*/

select titulo, año, MIN(presupuesto) as presupuesto
from Pelicula 
group by titulo;

/*
Mostrar el sueldo de la actriz mejor pagada.
*/

select MAX(E.sueldo)
from Actor A, Elenco E
where A.nombre = E.nombre and E.sexo = "Mujer"
