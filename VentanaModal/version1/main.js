import {CalculatorView} from './view.js';
import {CalculatorModel} from './model.js';
import {ModalDialog} from './modal-dialog.js';

function main()
{
    document.body.classList.add("w3-container");

    let myCalculatorModel = new CalculatorModel();
    let myCalculatorView = new CalculatorView(myCalculatorModel);
    let myModalDialog = new ModalDialog();

    let buttonOpenModal = document.createElement('button');
    buttonOpenModal.innerText = 'Abrir ventana modal';

    myModalDialog.innerContent.appendChild(myCalculatorView);
    buttonOpenModal.addEventListener('click', ()=>myModalDialog.show() );

    document.body.appendChild(myModalDialog);
    document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main );