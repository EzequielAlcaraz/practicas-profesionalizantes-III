import {FormView} from './formView.js';
import {FormModel} from './formModel.js';
import {ModalDialog} from './modal-dialog.js';

function main()
{
    document.body.classList.add("w3-container");

    let myFormModel = new FormModel();
    let myFormView = new FormView(myFormModel);
    let myModalDialog = new ModalDialog();

    let header = document.createElement('header');
    header.classList.add("w3-container", "w3-green", "w3-xxlarge");
    header.innerText = 'FORMULARIO VISTA MODAL';

    let content = document.createElement('div');
    content.classList.add("w3-container", "w3-lime", "w3-center", "w3-complete-content");
    
    let buttonOpenModal = document.createElement('button');
    buttonOpenModal.innerText = 'Iniciar Sesion';

    myModalDialog.innerContent.appendChild(myFormView);
    buttonOpenModal.addEventListener('click', ()=>myModalDialog.show() );

    document.body.appendChild(header);
    document.body.appendChild(content);
    content.appendChild(myModalDialog);
    content.appendChild(buttonOpenModal);
}

window.addEventListener('load', main );