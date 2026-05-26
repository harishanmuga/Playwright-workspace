function isPalindrome1(ip) {
    const rev=ip.split("").reverse().join("")
    return ip==rev
}

function isPalindrome2(ip) {
    let rev=""
    const revArr=ip.split("")
    for (let index = revArr.length-1; index >= 0 ; index--) {
        rev=rev+revArr[index]
        
    }
    return ip==rev
}

console.log(isPalindrome1("madam"))
console.log(isPalindrome2("madam1"))