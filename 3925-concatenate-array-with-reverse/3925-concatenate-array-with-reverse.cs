public class Solution {
    public int[] ConcatWithReverse(int[] nums) {
        List<int> ans = nums.ToList();
        for(int i=nums.Length-1;i>=0;i--){
            ans.Add(nums[i]);
        }
        return nums=ans.ToArray();
    }
}