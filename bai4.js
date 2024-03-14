// Đầu vào: Ma trận thời gian gia công tij (n x m), n: số chi tiết, m: số máy
// Output: Trình tự gia công các chi tiết trên các máy để hoàn thành sớm nhất

function findSchedule(timeMatrix) {
  let n = timeMatrix.length; // Số chi tiết
  let m = timeMatrix[0].length; // Số máy

  let schedule = []; // Mảng lưu trình tự gia công

  // Tính thời gian hoàn thành trên từng máy
  let finishTimeOnMachine = Array.from({ length: m }, () => 0);

  for (let i = 0; i < n; i++) {
      let minFinishTime = Math.min(...finishTimeOnMachine);
      let minIndex = finishTimeOnMachine.indexOf(minFinishTime);

      schedule.push({ chitiet: i, maymoc: minIndex,thoigianbd: minFinishTime });

      finishTimeOnMachine[minIndex] = minFinishTime + timeMatrix[i][minIndex];
  }

  return schedule;
}

// Example:
let timeMatrix = [
  [6, 1, 3],
  [3, 7, 1],
  [1, 3, 4]
];

let result = findSchedule(timeMatrix);
console.log(result);