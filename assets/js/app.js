class Consultorio {
    constructor(nombre) {
        this.nombre = nombre
        this.paciente = []
    }
    get getPaciente() {
        return this.paciente
    }
    set setPaciente(value) {
        this.paciente.push(value)
    }

    buscarPacientePorNombre(nombre) {
        return this.paciente.find(paciente => paciente.nombre === nombre);
    }

}


class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(value) {
        this.nombre = value;
    }
    get getEdad() {
        return this.edad;
    }
    set setEdad(value) {
        this.edad = value;
    }
    get getRut() {
        return this.rut;
    }
    set setRut(value) {
        this.rut = value;
    }
    get getDiagnostico() {
        return this.diagnostico;
    }
    set setdiagnostico(value) {
        this.diagnostico = value;
    }

}

// crear pacientes  
const pacienteUno = new Paciente("Camila", "51", "11654897-6", "gastritis")
const pacienteDos = new Paciente("Paula", "35", "17289564-7", "alergia")
const pacienteTres = new Paciente("Tomas", "22", "20658742-1", "gripe")

//  nombre consultorio 
const consultorioUno = new Consultorio("consultorio Uno")

// mostrar datos de paciente
consultorioUno.setPaciente = pacienteUno
consultorioUno.setPaciente = pacienteDos
consultorioUno.setPaciente = pacienteTres

console.log(consultorioUno.getPaciente)


// buscar pacientes por nombre:
console.log(consultorioUno.buscarPacientePorNombre("Tomas"));
console.log(consultorioUno.buscarPacientePorNombre("Paula"));
























