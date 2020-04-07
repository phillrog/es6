class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Phillipe';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }   
}

class Matematica {
    static soma(a,b) {
        return a+b;
    }
}
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();

console.log(Matematica.soma(10,2));

/// variaveis mutaveis
const usuario = { nome: 'João' }

usuario.nome = 'Jonas';

console.log(usuario.nome);

/// escopo
function teste(z) {
    let x = 1;

    if (z > 5) {
        console.log(z, x);
    }
}

teste(10);

//vetor

const arr = [1,2,3,4,5,6];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item == 6;
});

console.log(find);


/// Arraow funcitons

const newArray1 = arr.map((item) => item * 2); 

console.log(newArray1);

const arrFunc2 = () => 1; 

console.log(arrFunc2());

const arrFunc3 = () => [1,2,3,4]; 

console.log(arrFunc3());

const arrFunc4 = () => ({nome: 'Nome'}); 

console.log(arrFunc4());

const arrFunc5 = () => { 
    return {nome: 'Outro Nome'}
}; 

console.log(arrFunc5());

/// valores padrão

const arrFunc6 = (a = 1, b= 2) => a + b;

console.log(arrFunc6());


/// Desestruturação
const user = {
    nome: 'Phillipe',
    idade: 300,
    endereco: {
        cidade: 'Santa Rosa de Viterbo',
        estado: 'SP'
    }
}

const { nome, idade, endereco: {cidade} } = user;

console.log(nome);
console.log(idade);
console.log(cidade);

const parametrizado = ({nome, cidade, endereco: {estado}}) => console.log(nome, ' - ', idade, ' - ', estado);

parametrizado(user);