/* class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }
}

let persona = new Persona('Angel',22); 
persona.saludar(); */

 //metodos estaticos

/*  class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }
    static definicion(){
        console.log("Una persona puede ser humano");
    }
}

Persona.definicion(); */

// clase y herencias 

/* class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }
    static definicion(){
        console.log("Una persona puede ser humano");
    }
    
}
class Desarrollador extends Persona{

    }
Desarrollador.definicion(); */

// otro ejemplo de clases y herencias 

/* class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }
    static definicion(){
        console.log("Una persona puede ser humano");
    }
    
}
class Desarrollador extends Persona{
    saludoDesarrollador(){
        this.saludar();
        console.log("Soy un desarrollador de software ");
    }
    } 
     let desarrollador= new Desarrollador ('Angel', 22);
desarrollador.saludoDesarrollador();

 */

// Palabra reservada super 
class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }
    static definicion(){
        console.log("Una persona puede ser humano");
    }
    
}
class Desarrollador extends Persona{
    constructor(nombre,edad,tipo){
        super(nombre,edad);
        this.tipo=tipo; 

    }
    saludoDesarrollador(){
        this.saludar();
        console.log(`Soy una  ${this.tipo} developer`);
    }
    } 
     let desarrollador= new Desarrollador ('Angel', 22,'Frontend');
desarrollador.saludoDesarrollador();


