public class Solution {
    public int MinOperations(int[] nums, int k) {
         int sum =0;
        for(int i=0;i<nums.Length;i++){
            sum+=nums[i];
        }
        int minNumOfOperations = sum % k ;
        return minNumOfOperations;
    
    }
}