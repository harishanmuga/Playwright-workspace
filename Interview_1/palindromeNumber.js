
/* org value === rev value that is palindrome & neg values are not a palindrome */

function isPalindrome(org) {
    if (org<0) return false;
    let temp = org;
    let rev = 0;
    while (temp>0) {
        let rem=temp%10;
        rev = (rev*10)+rem;
        temp = Math.floor(temp/10)
    }
    return org === rev
}

console.log(isPalindrome(222))