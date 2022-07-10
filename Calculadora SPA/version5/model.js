class CalculatorModel
{
    constructor()
    {

    }

    calculate( expression )
    {
        // return eval(expression);
        return fetch( './backend/calculate.php', {method:'post', body: JSON.stringify(expression)} ).then (response => response.json() );
    }
}


export { CalculatorModel };