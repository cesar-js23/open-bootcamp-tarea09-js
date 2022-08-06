let fechaHoy = new Date();

let fechaNacimiento = new Date(1992,07,23);

let mayor = fechaHoy.getTime() > fechaNacimiento.getTime();

let diaNacimiento = fechaNacimiento.getDate();

let mesNacimiento = fechaNacimiento.getMonth()+1;

let añoNacimiento = fechaNacimiento.getFullYear();
console.log(añoNacimiento);