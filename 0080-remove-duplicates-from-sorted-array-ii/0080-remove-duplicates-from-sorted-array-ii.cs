public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int numofduplicates = 0;
        int totallength = 1;
        int lengthoflist = nums.Length;
        if (lengthoflist <= 1)
        {
            return lengthoflist;
        }
        for (int i = 1; i < lengthoflist-1; i++)
        {
            if (nums[i] == nums[i - 1] && nums[i] == nums[i+1])
            {
                numofduplicates++;
            }
            else
            {
                nums[i - numofduplicates] = nums[i];
                totallength++;
            }
        }
        nums[lengthoflist - 1 - numofduplicates] = nums[lengthoflist - 1];
        totallength++;
        return totallength;
    }
}