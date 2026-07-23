function calculateSum(numbers){
    let soma = 0
    for(let num of numbers){
        let primo = true
        if (num < 2){
            primo = false
        }
        for(let j = 2; j < num; j++){
            if(num % 3 === 0){
                primo = false
            }
            if(primo){
                soma += num
            }
        }
    }
}

console.log(soma);