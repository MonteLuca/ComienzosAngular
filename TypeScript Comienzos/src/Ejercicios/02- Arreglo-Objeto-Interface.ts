/*
    ===== Código de TypeScript =====
*/

//Esta es una de las maneras de crear un Arreglo
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

// habilidades.push();

//El signo de pregunta al final de puebloNatal significa que es opcinal
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);