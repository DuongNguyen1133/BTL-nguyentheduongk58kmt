function generateSubsets(nums) {
  const results = [];

  function backtrack(start, subset) {
    // Thêm dãy con hiện tại vào danh sách kết quả
    results.push([...subset]);

    // Duyệt qua các phần tử còn lại
    for (let i = start; i < nums.length; i++) {
      // Thêm phần tử hiện tại vào dãy con
      subset.push(nums[i]);

      // Quay lui với dãy con được cập nhật
      backtrack(i + 1, subset);

      // Xóa phần tử hiện tại khỏi dãy con
      subset.pop();
    }
  }

  // Bắt đầu với dãy con rỗng
  backtrack(0, []);

  return results;
}

// Ví dụ sử dụng
const nums = [1, 2, 3, 4];
const subsets = generateSubsets(nums);

console.log("Danh sách dãy con:");
console.log(subsets);
