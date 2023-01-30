/*
===== Código de TypeScript =====
*/
//Un decorador es una clase que expande las funcionalidades de una clase
function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

@ClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123'

    imprimir(){
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase)