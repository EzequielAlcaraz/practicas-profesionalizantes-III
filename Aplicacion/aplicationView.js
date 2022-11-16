import {NavDesplegable} from './navDesplegable.js';


class AplicationView extends HTMLElement
{
    constructor(model)
    {
        super();
        
        this.myBarNav = new NavDesplegable();
        this.myNavImage = this.myBarNav.addButtonImage();
        this.myButtonNav1 = this.myBarNav.addItem();
        this.myButtonNav1.innerText = 'Link1';

    }

    connectedCallBack()
    {
        this.appendChild(this.myBarNav);
    }
}

customElements.define('x-app', AplicationView);

window.addEventListener('load', ()=>
{
    let app = new AplicationView(null);
    document.body.appendChild(app);

});