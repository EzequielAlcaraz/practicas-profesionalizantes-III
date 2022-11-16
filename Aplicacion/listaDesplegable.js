
class ListaDesplegableController
{
    constructor(view)
    {
        this.innerView = view
    }

    onClick()
    {
        let x = this.innerView.container;
    }

}

class ListaDesplegable extends HTMLElement
{
    constructor()
    {
        super();
        this.classList.add('w3-bar-item', 'w3-button');
        this.innerText = 'Dropdown *';
        this.container = document.createElement('div');
        this.container.classList.add('w3-hide');
        this.appendChild(this.container);

        this.controller = new ListaDesplegableController();
    }

    addItem(nombre)
    {
        let item = document.createElement('a');
        // item.innerText = 'Link';
        item.classList.add('w3-bar-item', 'w3-button');
        this.container.appendChild(item);
        return item;
    }

    connectedCallback()
    {
        this.addEventListener('click', () => this.innerController.onClick() );
    }

    disconnectedCallback()
    {

    }

}

export {ListaDesplegable}


window.addEventListener('load' ()=>
{

})