function findExpression(number) {
    function Expression(lastResult, expression) {
        if (lastResult == number) return expression;
        if (number < lastResult) return undefined;

        if (Expression(lastResult * 2, expression + " *2") !== undefined) return Expression(lastResult * 2, expression + " *2");
        if (Expression(lastResult + 4, expression + " +4") !== undefined) return Expression(lastResult * 2, expression + " +4");

        return undefined;
    }

    return Expression(1,"1");
}

console.log(findExpression(8))