import './style.css';

const icons = {
    arrowDown: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDEwIDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00Ljk3NDM1IDQuODY5OUM0Ljc5NjA1IDQuODY5OSA0LjYxNzc3IDQuODExNDMgNC40ODE4MyA0LjY5NDc2TDAuMjA0MDkgMS4wMjEzMUMtMC4wNjgwMyAwLjc4NzYzNSAtMC4wNjgwMyAwLjQwODc2OSAwLjIwNDA5IDAuMTc1MTg3QzAuNDc2MSAtMC4wNTgzOTU1IDAuOTE3MjA4IC0wLjA1ODM5NTUgMS4xODkzNSAwLjE3NTE4N0w0Ljk3NDM1IDMuNDI1NjVMOC43NTkzNyAwLjE3NTNDOS4wMzE0OSAtMC4wNTgyODIgOS40NzI1NSAtMC4wNTgyODIgOS43NDQ1NCAwLjE3NTNDMTAuMDE2OCAwLjQwODg4MiAxMC4wMTY4IDAuNzg3NzQ5IDkuNzQ0NTQgMS4wMjE0M0w1LjQ2Njg3IDQuNjk0ODdDNS4zMzA4NiA0LjgxMTU3IDUuMTUyNTggNC44Njk5IDQuOTc0MzUgNC44Njk5WiIgZmlsbD0iIzc3OEZCQiIvPgo8L3N2Zz4K',
    checked: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNjY2OTggMTBMMCA1LjYyNDg5TDEuMzMzMTUgNC4zNzUxMUw0Ljc3ODIzIDcuNjAxMkw0LjY2Njk4IDcuNDk5NTZMMTIuNjY2OCAwTDE0IDEuMjQ5NzhMNi4wMDAxMyA4Ljc1MDIyTDQuNjY3OTIgOS45OTkxMkw0LjY2Njk4IDEwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNyIgeTE9IjAiIHgyPSI3IiB5Mj0iMTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzM0QUE0NCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzOUI1NEEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K',
    check: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4='
}

export default class JsSelect {
    constructor(dom, data, options) {
        this.data = data;
        this.option = {
            placeholder: 'Placeholder',
            typing: 'Typing...',
            ...options,
        }
        this.constainerElem = document.querySelector(dom);
        this.elements = {};
        this.itemsElem = {};
        this.showDropdown = true;
        this.value = null;
        this.initUI();
        this.initData();
        this.events();
        this.toggleDropDown();
    }

    initUI() {
        const divMain = document.createElement('div');
        const divInput = document.createElement('div');
        const divDropdown = document.createElement('div');
        const divDropdownInput = document.createElement('div');
        const divDropdownList = document.createElement('div');

        const textInput = document.createElement('p');
        const imageInput = document.createElement('img');

        const searchInput = document.createElement('input');

        divMain.appendChild(divInput);
        divMain.appendChild(divDropdown);
        divInput.appendChild(textInput);
        divInput.appendChild(imageInput);
        divDropdown.appendChild(divDropdownInput);
        divDropdown.appendChild(divDropdownList);
        divDropdownInput.appendChild(searchInput);
        this.constainerElem.appendChild(divMain);

        divMain.classList.add('js-select-container');
        divInput.classList.add('js-select-input');
        divInput.classList.add('value-null');
        divDropdown.classList.add('js-select-dropdown');
        textInput.classList.add('js-select-input-text');
        imageInput.classList.add('js-select-input-img');
        divDropdownInput.classList.add('js-select-dropdown-input');
        divDropdownList.classList.add('js-select-dropdown-list');

        imageInput.setAttribute('src', icons.arrowDown);
        searchInput.setAttribute('placeholder', this.option.typing);
        this.elements = {
            divMain, divInput, divDropdown, textInput, imageInput, divDropdownInput, divDropdownList, searchInput
        }
    }

    initData() {
        this.elements.textInput.innerText = this.option.placeholder;
        //add data
        this.data = [
            {id: null, name: `-- ${this.option.placeholder} --`},
            ...this.data
        ];
        //render data
        this.itemsElem = this.data.map((item, index) => {
            const container = document.createElement('div');
            const title = document.createElement('span');
            const checked = document.createElement('img');
            container.appendChild(title);
            container.appendChild(checked);
            checked.setAttribute('src', index === 0 ? icons.checked : icons.check);
            title.innerText = item.name;
            this.elements.divDropdownList.appendChild(container);

            container.classList.add('js-select-item');
            container.classList.add('viewed');
            index === 0 ? container.classList.add('first') : null;
            index === 0 ? container.setAttribute('data-checked', 'true') : null;
            title.classList.add('js-select-item-title');
            checked.classList.add('js-select-item-image');

            const element = {container, title, checked, ...item};

            container.addEventListener('click', () => {
                this.onSelect(item, element);
            });
            return element;
        });
    }

    onSelect(item, element) {
        let result = null;

        this.itemsElem.map(x => {
            x.checked.setAttribute('src', icons.check);
            x.container.classList.remove('checked');
            x.container.setAttribute('data-checked', 'false');
        });


        if (!item.id) {
            this.elements.textInput.innerText = this.option.placeholder;
            this.elements.divInput.classList.add('value-null');
            element.container.classList.remove('checked');
            element.checked.setAttribute('src', icons.checked);
            this.value = null;
            element.checked.setAttribute('src', icons.checked);
            element.container.setAttribute('data-checked', 'true');
        } else {
            this.elements.textInput.innerText = item.name;
            result = item;
            this.value = item.id;
            this.elements.divInput.classList.remove('value-null');
            element.checked.setAttribute('src', icons.checked);
            element.container.setAttribute('data-checked', 'true');
            element.container.classList.remove('checked');
        }

        this.showDropdown = true;
        this.toggleDropDown();

        if (this.onSelectedCallback) {
            this.onSelectedCallback(result);
        }
    }

    toggleDropDown() {
        if (!this.showDropdown) {
            // this.elements.divDropdown.style.display = 'block';
            this.elements.searchInput.focus();
            this.elements.divInput.classList.add('show-dropdown');
            this.elements.divDropdown.style.height = ((this.data.length + 1) > 6 ? '262px' : ((this.data.length + 1) * 37 + 'px'));
            this.elements.divDropdown.style.borderWidth = '1px';
        } else {
            // this.elements.divDropdown.style.display = 'none';
            this.elements.divInput.classList.remove('show-dropdown');
            this.elements.divDropdown.style.height = '0px';
            this.elements.divDropdown.style.borderWidth = '0px';
        }
        this.showDropdown = !this.showDropdown;
    }

    filterItem() {
        const value = this.elements.searchInput.value;
        let isFirst = false;
        this.itemsElem.map(elm => {
            elm.container.classList.remove('first');
            if (elm.name.toUpperCase().indexOf(value.toUpperCase()) >= 0) {
                elm.container.style.display = 'flex';
                elm.container.classList.add('viewed');
                !isFirst ? elm.container.classList.add('first') : null;
                isFirst = true;
            } else {
                elm.container.style.display = 'none';
                elm.container.classList.remove('viewed');
            }
        });
        this.elements.divDropdown.style.height = ((this.data.length + 1) > 6 ? '262px' : ((this.data.length + 1) * 37 + 'px'));
    }

    setValue(value) {
        const dataItem = this.itemsElem.find(x => x.id === value);
        if (dataItem) {
            this.onSelect(dataItem, dataItem);
        }
    }

    destroy() {
        this.elements.divMain.remove();
    }

    events() {
        this.elements.divInput.addEventListener('click', () => {
            this.toggleDropDown();
        });
        document.addEventListener('click', (evt) => {
            if (!evt.path.find(x => x === this.elements.divMain)) {
                this.showDropdown = true;
                this.toggleDropDown();
            }
        });

        this.elements.searchInput.addEventListener('keyup', () => {
            this.filterItem();
        });
    }

    onSelected(callback) {
        this.onSelectedCallback = callback;
    }
}
