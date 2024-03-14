// Số lượng loại bánh
const numCakes = 4;

// Số lượng loại nước giải khát
const numDrinks = 3;

// Số lượng loại kem
const numIceCreams = 2;

// Hàm tính tổng số cách chọn
function totalChoices() {
  return numCakes * numDrinks * numIceCreams;
}

// In kết quả
console.log(`Có ${totalChoices()} cách chọn phần tráng miệng.`);

