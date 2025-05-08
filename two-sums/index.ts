function twoSum(nums: number[], target: number): number[] | undefined {

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const rest = target - nums[i];
      if (map.has(rest)) {
          return [map.get(rest), i];
      }
      map.set(nums[i], i);
  }

};


function main(){
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1]

  const nums2 = [3, 2, 4];
  const target2 = 6;
  const result2 = twoSum(nums2, target2);
  console.log(result2); // Output: [1, 2]
  
  const nums3 = [3, 3];
  const target3 = 6;
  const result3 = twoSum(nums3, target3);
  console.log(result3); // Output: [0, 1]

}

main();