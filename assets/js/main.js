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

console.log(estudiante3, estudiante4, estudiante5);

/* Estudiante3.aprobarCurso("PHP y MySQL"); */

console.log(estudiante3)

Student.prototype.aprobarCurso = function (nuevoCurso) {
     this.cursosAprobados.push(nuevoCurso);
}


estudiante4.aprobarCurso("JavaScript");

console.log(estudiante4)


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

console.log('---------------------')


function Cuadrado (lado) {
  this.lado = lado;
  
}

Cuadrado.prototype.calcularArea = function () {
    return this.lado * this.lado
}

Cuadrado.prototype.calcularPerimetro = function () {
    return this.lado * 4
}

let cuadrado1 = new Cuadrado(5);

console.log(cuadrado1)


console.log(cuadrado1.calcularArea())
console.log(cuadrado1.calcularPerimetro())


function Estudiante8(name) {
    this.name = name
}

const paula = new Estudiante8("Paula")

console.log(paula)
    

const maria = new Estudiante8("Maria")
console.log(maria)


paula.name = 'Josefa'

console.log(paula)

// definiendola con el object defineProperty

/* function Vehiculo (marca) {
     let _marca = marca
    Object.defineProperty(this, "_getmarca", {
      get: function () {
        return _marca;
      },
    });
    Object.defineProperty(this, "_setmarca", {
      set: function (marca) {
        _marca = marca;
      },
    });
}
 */

/* Vehiculo.prototype.getmarca = function () {
    return this._getmarca
}

Vehiculo.prototype.setmarca = function (nueva_marca) {
    this._setmarca = nueva_marca
}

const v1 = new Vehiculo('Toyota')

console.log(v1.getmarca())

const v2 = new Vehiculo('Nissan')
console.log(v2.getmarca())

v2._marca = 'Chevrolet'
console.log(v2.marca)

v1.setmarca("Kia");
console.log(v1.getmarca());  */


function Vehiculo(marca) {
    let _marca = marca
    
    //getter
    this.getMarca = function () {
        return _marca
    }

    //setter
    this.setMarca = function (nueva_marca) {
        _marca = nueva_marca
    }
}

let v2 = new Vehiculo('Hiunday')
console.log(v2.getMarca())


v2.setMarca('Honda')
console.log(v2.getMarca())


function Persona(nombre, mascota) {
  this.nombre = nombre;
  this.mascota = mascota;
}


function Mascota(nombre) {
  this.nombre = nombre;
}


let m1 = new Mascota("Snowball");
let p1 = new Persona("Julián", m1);

console.log(m1)
console.log(p1)