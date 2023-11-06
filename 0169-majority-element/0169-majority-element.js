/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var length = nums.length;
    var dict = {}
    for (let i = 0; i < length; i++) {
        if (nums[i] in dict){
            dict[nums[i]] += 1;
        }
        else {
            dict[nums[i]] = 1;
        }
        if (nums[i] in dict){
            if (dict[nums[i]] > length/2){
                return nums[i];
            }
        }
    }
};