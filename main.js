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