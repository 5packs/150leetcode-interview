public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int numofk = 0;
        int totallength = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == val)
            {
                numofk++;
            }
            else
            {
                nums[i - numofk] = nums[i];
                totallength++;
            }
        }
        return totallength;
    }
}