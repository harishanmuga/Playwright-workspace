function isPrime(data){
    if (data<=1) return false;
    for (let i = 2; i < data; i++) {
        if (data%i==0) {
            return false
        }
    }
    return true
}


console.log(isPrime(7))