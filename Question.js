function sum(nums, target) {
    const indexes = new Map();
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (indexes.has(complement)) {
            result.push([indexes.get(complement), i]);
        }

        indexes.set(nums[i], i);
    }

    return result;
}

// Example :
const nums = [2, 7, 11, 15];
const target = 9;
const result = sum(nums, target);
console.log(result);
