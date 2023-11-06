/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var newS = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    var length = newS.length;
    for (let i = 0; i < length/2; i++){
        if (newS[i] !== newS[length-i-1]){
            return false;
        }
    }
    return true;
};