public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int numofduplicates = 0;
        int totallength = 1;
        int lengthoflist = nums.Length;
        if (lengthoflist == 1)
        {
            return 1;
        }

        for (int i = 1; i < lengthoflist; i++)
        {
            if (nums[i] == nums[i-1])
            {
                numofduplicates++;
            }
            else
            {
                nums[i - numofduplicates] = nums[i];
                totallength++;
            }
        }
        return totallength;
    }
}