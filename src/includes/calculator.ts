export const calculate = (expression: string) => {
    const validExpression = /^[0-9+\-*/.() ]*$/;

    if (!validExpression.test(expression)) {
        throw new Error('Invalid expression: contains invalid characters.');
    }

    if (/([+\-*/.]{2,})/.test(expression)) {
        throw new Error('Invalid expression: contains consecutive operators.');
    }

    try {
        return eval(expression);
    } catch (error) {
        console.error(error);
        throw new Error('Error evaluating expression.');
    }
}   
