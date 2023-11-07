/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var length = s.length;
    var number = 0;
    for (let i = 0; i < length-1; i++){
        let current = dict[s[i]];
        if (current < dict[s[i+1]]){
            number += dict[s[i+1]]-current;
            i++;
            if (i+1 >= length){
                return number;
            }
        }
        else
        {
            number += current;
        }
    }
    number += dict[s[length-1]];
    return number;
};