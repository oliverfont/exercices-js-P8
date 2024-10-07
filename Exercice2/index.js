function calculate(num1, num2, operator) {
    // Convertir les paramètres en nombres
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed";
            } else {
                return num1 / num2;
            }
        default:
            return "Invalid operator";
    }
}

export default calculate
