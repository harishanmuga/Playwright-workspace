const browserName = "Chrome"
function getBrowserName(browserName) {
    if(browserName=="Chrome"){
        var browserName="chrome" // tried with the var and let, var is printing and let getting exception
    }
    console.log(browserName)
}
getBrowserName(browserName)