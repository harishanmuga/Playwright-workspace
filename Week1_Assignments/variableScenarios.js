const genderType = "female" // global scoped
function printGender(){
    let color = "brown" // function scoped
    if (genderType.startsWith("female")) {
        var age = 30 // not only block scoped
        let color = "pink" // only block scoped
        console.log(color); 
    }
    console.log(age)  // incase of male it will give undefined, for female print as expected.
}
console.log(genderType)
printGender()