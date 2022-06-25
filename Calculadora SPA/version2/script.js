function startGUI()
{
    let calculator = document.createElement('div');
    calculator.classList.add('calculator');


    let display = document.createElement('input');
    display.type = 'text';
    display.setAttribute('disabled', '');
    display.value = '';
    display.classList.add('displayBox');

    let button0 = document.createElement('button');
    button0.innerText = '0';
    button0.classList.add('buttons', 'numericButtons');

    let button1 = document.createElement('button');
    button1.innerText = '1';
    button1.classList.add('buttons', 'numericButtons');

    let button2 = document.createElement('button');
    button2.innerText = '2';
    button2.classList.add('buttons', 'numericButtons');

    let button3 = document.createElement('button');
    button3.innerText = '3';
    button3.classList.add('buttons', 'numericButtons');

    let button4 = document.createElement('button');
    button4.innerText = '4';
    button4.classList.add('buttons', 'numericButtons');

    let button5 = document.createElement('button');
    button5.innerText = '5';
    button5.classList.add('buttons', 'numericButtons');

    let button6 = document.createElement('button');
    button6.innerText = '6';
    button6.classList.add('buttons', 'numericButtons');

    let button7 = document.createElement('button');
    button7.innerText = '7';
    button7.classList.add('buttons', 'numericButtons');

    let button8 = document.createElement('button');
    button8.innerText = '8';
    button8.classList.add('buttons', 'numericButtons');

    let button9 = document.createElement('button');
    button9.innerText = '9';
    button9.classList.add('buttons', 'numericButtons');

    let buttonDec = document.createElement('button');
    buttonDec.innerText = '.';
    buttonDec.classList.add('buttons', 'numericButtons');


    let buttonPlus = document.createElement('button');
    buttonPlus.innerText = '+';
    buttonPlus.classList.add('buttons', 'operatorButtons');

    let buttonRest = document.createElement('button');
    buttonRest.innerText = '-';
    buttonRest.classList.add('buttons', 'operatorButtons');

    let buttonMultiply = document.createElement('button');
    buttonMultiply.innerText = '*';
    buttonMultiply.classList.add('buttons', 'operatorButtons');

    let buttonDivide = document.createElement('button');
    buttonDivide.innerText = '/';
    buttonDivide.classList.add('buttons', 'operatorButtons');


    let buttonCalculate = document.createElement('button');
    buttonCalculate.innerText = '=';
    buttonCalculate.classList.add('buttons', 'eqalButton');


    let buttonEraser = document.createElement('button');
    buttonEraser.innerText = 'Borrar';
    buttonEraser.classList.add('eraserButton');


    //Funcion controladora de reaccion de evento

    function onButton0Click(){display.value += '0';}
    function onButton1Click(){display.value += '1';}
    function onButton2Click(){display.value += '2';}
    function onButton3Click(){display.value += '3';}
    function onButton4Click(){display.value += '4';}
    function onButton5Click(){display.value += '5';}
    function onButton6Click(){display.value += '6';}
    function onButton7Click(){display.value += '7';}
    function onButton8Click(){display.value += '8';}
    function onButton9Click(){display.value += '9';}
    function onButtonDecClick(){display.value += '.';}

    function onButtonPlusClick(){display.value += '+';}
    function onButtonRestClick(){display.value += '-';}
    function onButtonMultiplyClick(){display.value += '*';}
    function onButtonDivideClick(){display.value += '/';}

    function onButtonCalculateClick(){display.value = eval(display.value);}

    function onButtonEraserClick(){display.value = '';}


    //Funcion controladora de evento para cada elemento

    button0.addEventListener('click', onButton0Click );
    button1.addEventListener('click', onButton1Click );
    button2.addEventListener('click', onButton2Click );
    button3.addEventListener('click', onButton3Click );
    button4.addEventListener('click', onButton4Click );
    button5.addEventListener('click', onButton5Click );
    button6.addEventListener('click', onButton6Click );
    button7.addEventListener('click', onButton7Click );
    button8.addEventListener('click', onButton8Click );
    button9.addEventListener('click', onButton9Click );
    buttonDec.addEventListener('click', onButtonDecClick );

    buttonPlus.addEventListener('click', onButtonPlusClick );
    buttonRest.addEventListener('click', onButtonRestClick );
    buttonMultiply.addEventListener('click', onButtonMultiplyClick );
    buttonDivide.addEventListener('click', onButtonDivideClick );

    buttonCalculate.addEventListener('click', onButtonCalculateClick );

    buttonEraser.addEventListener('click', onButtonEraserClick );


    //Creacion de los elementos de layout
    let tabla = document.createElement('table');
    tabla.classList.add('buttonsBox');
    for ( let i = 0; i<4; i++ )
    {
        let filaActual = tabla.insertRow();

        for ( let c = 0; c<4; c++ )
        {
            filaActual.insertCell();
        }
    }


    //Mostrar en el body del documento

    function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
    {
        tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
    }

    document.body.appendChild(calculator);

    calculator.appendChild(display);

    calculator.appendChild(tabla);

    posicionarElementoEnTabla(tabla,0,0,button7);
    posicionarElementoEnTabla(tabla,0,1,button8);
    posicionarElementoEnTabla(tabla,0,2,button9);
    posicionarElementoEnTabla(tabla,0,3,buttonPlus);
    posicionarElementoEnTabla(tabla,1,0,button4);
    posicionarElementoEnTabla(tabla,1,1,button5);
    posicionarElementoEnTabla(tabla,1,2,button6);
    posicionarElementoEnTabla(tabla,1,3,buttonRest);
    posicionarElementoEnTabla(tabla,2,0,button1);
    posicionarElementoEnTabla(tabla,2,1,button2);
    posicionarElementoEnTabla(tabla,2,2,button3);
    posicionarElementoEnTabla(tabla,2,3,buttonMultiply);
    posicionarElementoEnTabla(tabla,3,0,button0);
    posicionarElementoEnTabla(tabla,3,1,buttonDec);
    posicionarElementoEnTabla(tabla,3,2,buttonCalculate);
    posicionarElementoEnTabla(tabla,3,3,buttonDivide);
        
    calculator.appendChild(buttonEraser);

}

window.addEventListener('load', startGUI);