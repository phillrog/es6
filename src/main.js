class App {
    constructor () {
        this.respositories = [];

        this.formEl = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers () {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.respositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua idéia do papel e dê vida à sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v4',
            html_url: 'https://github.com/phillrog/es6/tree/4-AplicacaoComEs6'
        });

        console.log(this.respositories);
    }
}

new App();