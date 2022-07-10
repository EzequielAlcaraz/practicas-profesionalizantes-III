class CalculatorController
{
    constructor( view, model)
    {
        this.innerView = view;
        this.innerModel = model;
    }

    //Funcion controladora de reaccion de evento

    onButton0Click(){this.innerView.display.value += '0';}
    onButton1Click(){this.innerView.display.value += '1';}
    onButton2Click(){this.innerView.display.value += '2';}
    onButton3Click(){this.innerView.display.value += '3';}
    onButton4Click(){this.innerView.display.value += '4';}
    onButton5Click(){this.innerView.display.value += '5';}
    onButton6Click(){this.innerView.display.value += '6';}
    onButton7Click(){this.innerView.display.value += '7';}
    onButton8Click(){this.innerView.display.value += '8';}
    onButton9Click(){this.innerView.display.value += '9';}
    onButtonDecClick(){this.innerView.display.value += '.';}
    
    onButtonPlusClick(){this.innerView.display.value += '+';}
    onButtonRestClick(){this.innerView.display.value += '-';}
    onButtonMultiplyClick(){this.innerView.display.value += '*';}
    onButtonDivideClick(){this.innerView.display.value += '/';}
    
    onButtonCalculateClick(){this.innerView.display.value = this.innerModel.calculate(this.innerView.display.value);}
    
    onButtonEraserClick(){this.innerView.display.value = '';}
    
}


export {CalculatorController};