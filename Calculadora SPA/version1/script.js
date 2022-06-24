function startGUI()
{

    let display = document.getElementById("display");

    let button7 = document.getElementById("btn7");
    let button8 = document.getElementById("btn8");
    let button9 = document.getElementById("btn9");
    let buttonSum = document.getElementById("btnSum");

    let button4 = document.getElementById("btn4");
    let button5 = document.getElementById("btn5");
    let button6 = document.getElementById("btn6");
    let buttonRes = document.getElementById("btnRes");

    let button1 = document.getElementById("btn1");
    let button2 = document.getElementById("btn2");
    let button3 = document.getElementById("btn3");
    let buttonMul = document.getElementById("btnMul");

    let button0 = document.getElementById("btn0");
    let buttonDec = document.getElementById("btnDec");
    let buttonEqal = document.getElementById("btnIgu");
    let buttonDiv = document.getElementById("btnDiv");

    let buttonClear = document.getElementById("btnBor");


    //Crear funcion manejadora a reaccion de evento

    function onButton0Click(){display.innerText += '0';}
    function onButton1Click(){display.innerText += '1';}
    function onButton2Click(){display.innerText += '2';}
    function onButton3Click(){display.innerText += '3';}
    function onButton4Click(){display.innerText += '4';}
    function onButton5Click(){display.innerText += '5';}
    function onButton6Click(){display.innerText += '6';}
    function onButton7Click(){display.innerText += '7';}
    function onButton8Click(){display.innerText += '8';}
    function onButton9Click(){display.innerText += '9';}
    function onButtonDecClick(){display.innerText += '.';}

    function onButtonPlusClick(){display.innerText += '+';}
    function onButtonRestClick(){display.innerText += '-';}
    function onButtonMultiplyClick(){display.innerText += '*';}
    function onButtonDivideClick(){display.innerText += '/';}

    function onButtonCalculateClick(){display.innerText = eval(display.innerText);}

    function onButtonEraseClick(){display.innerText = ''}


    //Asignar funcion manejadora de evento a cada elemento

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

    buttonSum.addEventListener('click', onButtonPlusClick );
    buttonRes.addEventListener('click', onButtonRestClick );
    buttonMul.addEventListener('click', onButtonMultiplyClick );
    buttonDiv.addEventListener('click', onButtonDivideClick );

    buttonEqal.addEventListener('click', onButtonCalculateClick );

    buttonClear.addEventListener('click', onButtonEraseClick );

}

window.addEventListener('load', startGUI);
