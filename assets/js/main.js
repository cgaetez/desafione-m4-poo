
//1. Crear una función constructora para cada objeto.
/*
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}
*/

function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

//2. Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes.

function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _edad = edad;
  let _rut = rut;
  let _diagnostico = diagnostico;

  //getters
  this.getNombre = function(){
    return _nombre;
  }
  this.getEdad = function(){
    return _edad;
  }
  this.getRut = function(){
    return _rut;
  }
  this.getDiagnostico = function(){
    return _diagnostico;
  }

  //setters
  this.setNombre = function(nombre){
    _nombre = nombre;
  }
  this.setEdad = function(edad){
    _edad = edad;
  }
  this.setRut = function(rut){
    _rut = rut;
  }
  this.setDiagnostico = function(diagnostico){
    _diagnostico = diagnostico;
  }

}

 
/*Crear un método mediante la propiedad prototype que permita buscar los datos de
los usuarios por nombre y otro método que permita mostrar todos los datos de los
usuarios registrados.*/


// Método para buscar usuarios por nombre
Consultorio.prototype.buscarPorNombre = function(nombre) {
  let usuariosEncontrados = [];
  for (let paciente of this.pacientes) {
    if (paciente.getNombre() == nombre) {
      console.log(`Paciente con nombre ${nombre} encontrado tiene rut: ${paciente.getRut()}`);
      usuariosEncontrados.push(paciente);
    }
  }
  console.log('----------fin buscar por nombre------------');

  return usuariosEncontrados;
};

// Método para mostrar todos los datos de los usuarios registrados
Consultorio.prototype.mostrarTodos = function() {
  for (let paciente of this.pacientes) {
    console.log('Nombre:', paciente.getNombre());
    console.log('Rut:', paciente.getRut());
    console.log('Edad:', paciente.getEdad());
    console.log('Diagnóstico:', paciente.getDiagnostico());
  }
  console.log('----------fin mostrar todos------------');

  return this.pacientes;

};

//4. Instanciar cada objeto utilizando la instrucción new.

// Creamos una instancia de Consultorio
let consultorio = new Consultorio('Cesfam', []);

// Ahora puedes agregar pacientes al consultorio
consultorio.pacientes.push(new Paciente('Claudia', 30, '12345678-9', 'Dolor de cabeza'));
consultorio.pacientes.push(new Paciente('Claudia', 14, '15345672-9', 'Dolor de pecho'));
consultorio.pacientes.push(new Paciente('María', 25, '98765432-1', 'Gripe'));


// Ejemplo de uso del método buscarPorNombre
let pacientesJuan = consultorio.buscarPorNombre('Claudia');
console.log('Pacientes encontrados agrupados:', pacientesJuan);

// Ejemplo de uso del método mostrarTodos
let todosLosPacientes = consultorio.mostrarTodos();
console.log('Todos los pacientes agrupados:', todosLosPacientes);
