III.	function generateHexagon(n) {
  IV.	  if (n % 2 === 0) {
  V.	    throw new Error("n must be odd");
  VI.	  }
  VII.	
  VIII.	  const center = Math.floor(n / 2);
  IX.	  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  X.	  const hexagon = Array(n).fill(null);
  XI.	
  XII.	  // Xếp số trung tâm
  XIII.	  hexagon[center] = numbers.shift();
  XIV.	
  XV.	  // Xếp các số theo vòng xoắn ốc
  XVI.	  let direction = 1; // 1: đi lên, -1: đi xuống
  XVII.	  let current = center;
  XVIII.	  while (numbers.length > 0) {
  XIX.	    hexagon[current] = numbers.shift();
  XX.	
  XXI.	    // Tìm vị trí tiếp theo
  XXII.	    let next;
  XXIII.	    if (direction === 1) {
  XXIV.	      next = current - 1;
  XXV.	      if (next < 0 || hexagon[next] !== null) {
  XXVI.	        direction = -1;
  XXVII.	        next = current + n;
  XXVIII.	      }
  XXIX.	    } else {
  XXX.	      next = current + 1;
  XXXI.	      if (next >= n || hexagon[next] !== null) {
  XXXII.	        direction = 1;
  XXXIII.	        next = current - n;
  XXXIV.	      }
  XXXV.	    }
  XXXVI.	
  XXXVII.	    current = next;
  XXXVIII.	  }
  XXXIX.	
  XL.	  return hexagon;
  XLI.	}
  XLII.	
  XLIII.	// Ví dụ sử dụng
  XLIV.	const n = 19;
  XLV.	const hexagon = generateHexagon(n);
  XLVI.	
  XLVII.	// In ra kết quả
  XLVIII.	console.log("Lục giác thần bí:");
  XLIX.	console.log(hexagon);
  L.	
  LI.	// Kiểm tra tổng
  LII.	const sum = hexagon.reduce((acc, num, i) => {
  LIII.	  if (i === 0) {
  LIV.	    return num;
  LV.	  }
  LVI.	
  LVII.	  const prev = hexagon[i - 1];
  LVIII.	  const next = hexagon[(i + 1) % n];
  LIX.	
  LX.	  return acc + num + prev + next;
  LXI.	}, 0);
  LXII.	
  LXIII.	console.log("Tổng mỗi hướng:", sum);
  LXIV.	
  