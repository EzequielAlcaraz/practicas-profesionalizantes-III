import { FormController } from "./formController.js";

class FormView extends HTMLElement
{
    constructor(model)
    {
        super();

        //Creacion de interfaz

        this.innerModel = model;
        this.innerController = new FormController(this, this.innerModel);

        this.usernameInput = document.createElement('input');
        this.usernameInput.type = 'text';
        this.usernameInput.placeholder = 'Username';
        this.usernameInput.classList.add("w3-input-type")

        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.placeholder = 'Password';
        this.passwordInput.classList.add("w3-input-type")

    }

    //Mostrar interfaz

    connectedCallback()
    {
        this.appendChild(this.usernameInput);
        this.appendChild(this.passwordInput);
    }

    getFormValues()
    {
        let loginData =
        {
            username: this.usernameInput.value,
            password: this.passwordInput.value
        } 

        return loginData;
    }
}


customElements.define('x-form-view', FormView);

export {FormView};