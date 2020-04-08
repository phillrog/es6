import api from './api';
import { load } from 'signal-exit';

class App {
    constructor () {
        this.respositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerHandlers();
    }

    registerHandlers () {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0  )
            return;

        this.setLoading(true);
        try {
            const response = await api.get(`repos/${repoInput}`);

            const {name, description, html_url, owner: { avatar_url }} = response.data;
            

            this.respositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
                        
            this.inputEl.value = '';
            
            this.render();
        } catch (error) {
            alert('O repositorio não existe')
        } finally {
            this.setLoading(false);
        }
    }

    render() {
        this.listEl.innerHTML = '';

        this.respositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id','loading');

            this.formEl.appendChild(loadingEl);
        }  else { 
            document.getElementById('loading').remove();
        }
    }
}

new App();
