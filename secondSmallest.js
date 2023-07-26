function getSecondSmallest(nums) {
    var smallest = Infinity;
    var secondSmallest = Infinity;
  
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] < smallest) {
        secondSmallest = smallest;
        smallest = nums[i];
      } else if (nums[i] < secondSmallest && nums[i] !== smallest) {
        secondSmallest = nums[i];
      }
    }
  
    return secondSmallest;
  }
  
  console.log(getSecondSmallest([5, 1, -2, 3]))
  console.log(getSecondSmallest([-5, 1, -2, 3])); 
  