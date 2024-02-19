let carro = new Object();

carro.marca = "Toyota";
carro.modelo = "Corolla";
carro.ano = 2020;

console.log(carro);

/* document.write(carro.ano);
document.write(carro.marca);
document.write(carro.modelo); */

let triangulo = new Object();

triangulo.ancho = 10;
triangulo.alto = 5;

console.log(triangulo);

let cuadrado = { ancho: 5, alto: 5 };

console.log(cuadrado);

cuadrado.ancho = 50;

console.log(cuadrado);

let vaca = new Object();

vaca.sonido = function () {
  console.log("mooooooo");
};

console.log(vaca.sonido());

const perro = {
  sonido: function () {
    console.log("guauuuu");
  },
};

console.log(perro.sonido());

let persona = new Object();

persona.nombre = "Sofia";
persona.apellido = "Perez";
persona.saludar = function () {
  console.log("hola " + this.nombre + "  " + this.apellido);
};

console.log(persona.saludar());

let natalia = {
  nombre: "natalia",
  apellido: "Rodriguez",
  saludar: function () {
    console.log(`Hola, ¿como estas ${this.nombre} ${this.apellido}?`);
  },
};

console.log(natalia.saludar());

const Estudiante = {
    name :  'Natalia',
    lastName: 'Rodriguez',
    cursosAprobados: ['JavaScript', 'HTML y CSS'],
    aprobarCurso: function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }

}

console.log(Estudiante.cursosAprobados);


console.log(Estudiante.cursosAprobados.push('PHP y MySQL'));

console.log(Estudiante);

Estudiante.aprobarCurso('Angular');

console.log(Estudiante);

Estudiante.age = 23;
Estudiante.name = 'Smilling';

Estudiante.saludar = function () {
    document.write(`Hola, ¿como estas ${this.name} ${this.lastName}? y tu edad es ${this.age}`);
}

/* Estudiante.saludar() */

Estudiante.name = 'Alejandra'

console.log(Estudiante.saludar())

const Estudiante2 = {
  name: "Juan",
  lastName: "Medina",
  cursosAprobados: ["JavaScript", "HTML y CSS"],
  aprobarCurso: function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

console.log(Estudiante2)

function Student(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
    this.age = age;
    this.cursosAprobados = []
   /*  this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    } */
    }


let estudiante3 = new Student("Claudia", "Gaete", 22);
let estudiante4 = new Student("Esteban", "Caceres", 20);
let estudiante5 = new Student("Francisco", "Cornejo", 28);

console.log(Estudiante3, Estudiante4, Estudiante5);

/* Estudiante3.aprobarCurso("PHP y MySQL"); */

console.log(Estudiante3)

Student.prototype.aprobarCurso = function (nuevoCurso) {
     this.cursosAprobados.push(nuevoCurso);
}


Estudiante4.aprobarCurso("JavaScript");

console.log(Estudiante4)


console.log('---------------------')
function Student2(name, lastName, age, nuevocurso) {
  this.name = name;
this.lastName = lastName;
this.age = age;
this.cursosAprobados = nuevocurso

   this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

let Estudiante6 = new Student2("Maria", "Gaete", 22, "PHP y MySQL");

console.log(Estudiante6)