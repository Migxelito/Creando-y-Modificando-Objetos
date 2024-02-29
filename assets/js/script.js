// Funcion Constructora para cada Objeto (Consultorio y Paciente):
function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.paciente = paciente || [];
};
Consultorio.prototype.agregar_paciente = function (paciente) {
    this.paciente.push(paciente);
};
function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagonostico = diagnostico;


// Getter y Setter para Acceder y Modificar los datos de los Pacientes:
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return this.nombre;
        }
    });
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            this.nombre = nombre;
        }
    });
    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return this.edad;
        }
    });
    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            this.edad = edad;
        }
    });
    Object.defineProperty(this, "_getRut", {
        get: function () {
            return this.rut;
        }
    });
    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            this.rut = rut;
        }
    });
    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return this.diagnostico;
        }
    });
    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            this.diagnostico = diagnostico;
        }
    });
};

Paciente.prototype.getNombre = function () {
    return this._getNombre;
};
Paciente.prototype.setNombre = function (nombre) {
    this._setNombre = nombre;
};
Paciente.prototype.getEdad = function () {
    return this._getEdad;
};
Paciente.prototype.setEdad = function (edad) {
    this._setEdad = edad;
};
Paciente.prototype.getRut = function () {
    return this._getRut;
};
Paciente.prototype.setRut = function (rut) {
    this._setRut = rut;
};
Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._setDiagnostico = diagnostico;
};


// Instanciar cada Objeto con la Instruccion New
var paciente1 = new Paciente('Pedro Perez', '39', '123456789-5', 'Dolor de Barriga');
var paciente2 = new Paciente('Marcela Castro', '45', '987654321-5', 'Dedo Fracturado');
consultorio = new Consultorio('Red Salud', [paciente1, paciente2]);
console.log(consultorio);

var paciente3 = new Paciente('Maria Gonzalez', '25', '123789456-5', 'Vomito');
consultorio.agregar_paciente(paciente3);
console.log(consultorio);


// Modificando Nombre, Edad, Rut, Diagnostico Paciente 1
paciente1.setNombre('Juan Martinez');
console.log(paciente1.getNombre());

paciente1.setEdad('18');
console.log(paciente1.getEdad());

paciente1.setRut('25896314-7');
console.log(paciente1.getRut());

paciente1.setDiagnostico('Fiebre');
console.log(paciente1.getDiagnostico());


// Metodo con Propiedad Prototype para Buscar datos por Nombre
Paciente.prototype.datospaciente = function () {
    console.log('Nombre del Paciente Es: ' + this.nombre);
};
paciente1.datospaciente();
paciente2.datospaciente();
paciente3.datospaciente();


// Metodo con Mostrar todos los Datos de los Usuarios Registrados
Paciente.prototype.todoslosdatos = function () {
    console.log(`
    Nombre del Paciente : ${this.nombre}, 
    Edad del Paciente: ${this.edad}, 
    RUT del Paciente: ${this.rut}, 
    Diagnostico del Paciente es: ${this.diagonostico}
    `)
};
paciente1.todoslosdatos();
paciente2.todoslosdatos();
paciente3.todoslosdatos();