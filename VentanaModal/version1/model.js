class CalculatorModel
{
    constructor()
    {

    }

    calculate( expression )
    {
        return eval(expression);
        // eval(display.value);
    }
}


export { CalculatorModel };