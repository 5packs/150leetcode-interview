/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k===0){return}
    let length = nums.length;
    let currentnum = nums[0];
    let currentindex = 0;
    let initialindex = 0;
    for (let i = 0; i < length; i++){
        let newindex = (currentindex+k) % length;
        if (newindex===initialindex){
            nums[newindex] = currentnum;
            newindex++;
            initialindex=newindex;
            currentnum = nums[newindex];
            currentindex = newindex;
            continue;
        }
        let tempnum = nums[newindex];
        nums[newindex] = currentnum;
        currentnum = tempnum;
        currentindex = newindex;
    }
};