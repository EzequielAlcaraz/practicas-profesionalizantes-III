import { CalculatorController } from "./controller.js";

class CalculatorView extends HTMLElement
{
    constructor( externalModel )
    {
        super();

        this.innerModel = externalModel;
        this.innerController = new CalculatorController( this, this.innerModel );


        //Crear elementos de UI desde HTMLDocument

        this.calculator = document.createElement('div');
        this.calculator.classList.add('calculator');
    
    
        this.display = document.createElement('input');
        this.display.type = 'text';
        this.display.setAttribute('disabled', '');
        this.display.value = '';
        this.display.classList.add('displayBox');
    
        this.button0 = document.createElement('button');
        this.button0.innerText = '0';
        this.button0.classList.add('buttons', 'numericButtons');
    
        this.button1 = document.createElement('button');
        this.button1.innerText = '1';
        this.button1.classList.add('buttons', 'numericButtons');
    
        this.button2 = document.createElement('button');
        this.button2.innerText = '2';
        this.button2.classList.add('buttons', 'numericButtons');
    
        this.button3 = document.createElement('button');
        this.button3.innerText = '3';
        this.button3.classList.add('buttons', 'numericButtons');
    
        this.button4 = document.createElement('button');
        this.button4.innerText = '4';
        this.button4.classList.add('buttons', 'numericButtons');
    
        this.button5 = document.createElement('button');
        this.button5.innerText = '5';
        this.button5.classList.add('buttons', 'numericButtons');
    
        this.button6 = document.createElement('button');
        this.button6.innerText = '6';
        this.button6.classList.add('buttons', 'numericButtons');
    
        this.button7 = document.createElement('button');
        this.button7.innerText = '7';
        this.button7.classList.add('buttons', 'numericButtons');
    
        this.button8 = document.createElement('button');
        this.button8.innerText = '8';
        this.button8.classList.add('buttons', 'numericButtons');
    
        this.button9 = document.createElement('button');
        this.button9.innerText = '9';
        this.button9.classList.add('buttons', 'numericButtons');
    
        this.buttonDec = document.createElement('button');
        this.buttonDec.innerText = '.';
        this.buttonDec.classList.add('buttons', 'numericButtons');
    
    
        this.buttonPlus = document.createElement('button');
        this.buttonPlus.innerText = '+';
        this.buttonPlus.classList.add('buttons', 'operatorButtons');
    
        this.buttonRest = document.createElement('button');
        this.buttonRest.innerText = '-';
        this.buttonRest.classList.add('buttons', 'operatorButtons');
    
        this.buttonMultiply = document.createElement('button');
        this.buttonMultiply.innerText = '*';
        this.buttonMultiply.classList.add('buttons', 'operatorButtons');
    
        this.buttonDivide = document.createElement('button');
        this.buttonDivide.innerText = '/';
        this.buttonDivide.classList.add('buttons', 'operatorButtons');
    
    
        this.buttonCalculate = document.createElement('button');
        this.buttonCalculate.innerText = '=';
        this.buttonCalculate.classList.add('buttons', 'eqalButton');
    
    
        this.buttonEraser = document.createElement('button');
        this.buttonEraser.innerText = 'Borrar';
        this.buttonEraser.classList.add('eraserButton');
    

        //Creacion de los elementos de layout
        this.tabla = document.createElement('table');
        this.tabla.classList.add('buttonsBox');

        for ( let i = 0; i<4; i++ )
        {
            let filaActual = this.tabla.insertRow();

            for ( let c = 0; c<4; c++ )
            {
                filaActual.insertCell();
            }
        }
    }


    connectedCallback()
    {

        //Funcion controladora de evento para cada elemento

        this.button0.addEventListener('click', (event) => this.innerController.onButton0Click(event) );
        this.button1.addEventListener('click', (event) => this.innerController.onButton1Click(event) );
        this.button2.addEventListener('click', (event) => this.innerController.onButton2Click(event) );
        this.button3.addEventListener('click', (event) => this.innerController.onButton3Click(event) );
        this.button4.addEventListener('click', (event) => this.innerController.onButton4Click(event) );
        this.button5.addEventListener('click', (event) => this.innerController.onButton5Click(event) );
        this.button6.addEventListener('click', (event) => this.innerController.onButton6Click(event) );
        this.button7.addEventListener('click', (event) => this.innerController.onButton7Click(event) );
        this.button8.addEventListener('click', (event) => this.innerController.onButton8Click(event) );
        this.button9.addEventListener('click', (event) => this.innerController.onButton9Click(event) );
        this.buttonDec.addEventListener('click', (event) => this.innerController.onButtonDecClick(event) );

        this.buttonPlus.addEventListener('click', (event) => this.innerController.onButtonPlusClick(event) );
        this.buttonRest.addEventListener('click', (event) => this.innerController.onButtonRestClick(event) );
        this.buttonMultiply.addEventListener('click', (event) => this.innerController.onButtonMultiplyClick(event) );
        this.buttonDivide.addEventListener('click', (event) => this.innerController.onButtonDivideClick(event) );

        this.buttonCalculate.addEventListener('click', (event) => this.innerController.onButtonCalculateClick(event) );

        this.buttonEraser.addEventListener('click', (event) => this.innerController.onButtonEraserClick(event) );


        //Mostrar en el body del documento

        this.appendChild(this.calculator);

        this.calculator.appendChild(this.display);

        this.calculator.appendChild(this.tabla);

        posicionarElementoEnTabla(this.tabla, 0, 0, this.button7);
        posicionarElementoEnTabla(this.tabla, 0, 1, this.button8);
        posicionarElementoEnTabla(this.tabla, 0, 2, this.button9);
        posicionarElementoEnTabla(this.tabla, 0, 3, this.buttonPlus);
        posicionarElementoEnTabla(this.tabla, 1, 0, this.button4);
        posicionarElementoEnTabla(this.tabla, 1, 1, this.button5);
        posicionarElementoEnTabla(this.tabla, 1, 2, this.button6);
        posicionarElementoEnTabla(this.tabla, 1, 3, this.buttonRest);
        posicionarElementoEnTabla(this.tabla, 2, 0, this.button1);
        posicionarElementoEnTabla(this.tabla, 2, 1, this.button2);
        posicionarElementoEnTabla(this.tabla, 2, 2, this.button3);
        posicionarElementoEnTabla(this.tabla, 2, 3, this.buttonMultiply);
        posicionarElementoEnTabla(this.tabla, 3, 0, this.button0);
        posicionarElementoEnTabla(this.tabla, 3, 1, this.buttonDec);
        posicionarElementoEnTabla(this.tabla, 3, 2, this.buttonCalculate);
        posicionarElementoEnTabla(this.tabla, 3, 3, this.buttonDivide);
            
        this.calculator.appendChild(this.buttonEraser);
    }

}

function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
    tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}


customElements.define('x-calculator-view', CalculatorView );


export {CalculatorView};
