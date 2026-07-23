function recebe (num1, num2) {
    if (num1 > num2) {
        return `${num1} é maior que ${num2}`;
    } else {
        return`${num2} é maior que ${num1}`;
    }
}

console.log(recebe(10, 50));