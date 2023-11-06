public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int index1 = m - 1;
        int index2 = n - 1;
        int indextotal = nums1.Length-1;
        while (indextotal >= 0)
        {
            if (index1 >= 0 && index2 >= 0)
            {
                if (nums1[index1] > nums2[index2])
                {
                    nums1[indextotal] = nums1[index1];
                    index1--;
                }
                else
                {
                    nums1[indextotal] = nums2[index2];
                    index2--;
                }
            }
            else
            {
                if (index1 < 0)
                {
                    nums1[indextotal] = nums2[index2];
                    index2--;
                }
                else
                {
                    nums1[indextotal] = nums1[index1];
                    index1--;
                }
            }
            indextotal--;
        }
    }
}