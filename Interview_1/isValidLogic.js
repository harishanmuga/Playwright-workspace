function isValid(data) {
    if (data) {
        return true
    }
    return false
}

console.log(isValid(0))

// in above script, returns undefined/false for 0 since 0,null,undefined & false => all considered as falsy in JS

function isValid1(data) {
    return data!==null && data!==undefined && data!==""
}

console.log(isValid1(0))

// in above case equalator === returns boolean result.