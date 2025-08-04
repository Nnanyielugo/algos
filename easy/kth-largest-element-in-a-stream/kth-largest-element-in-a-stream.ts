class KthLargest {
  nums: number[];
  k: number;
  constructor(k: number, nums: number[]) {
    this.nums = nums;
    this.k = k;
  }

  add(val: number): number {
    this.nums.unshift(val);
    this.nums.sort((a, b) => a - b);
    return this.nums[this.nums.length - this.k];
  }
}
