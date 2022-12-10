// bài 1: tính lương
// input: nhap so ngay lam
let day = 9;
// progress: luong = luong 1 ngay * so ngay lam
let salaryOneDay = 100000;
let salary = day * salaryOneDay;
// output: tien luong
console.log("lương :", salary,"VND");

// bài 2:tính giá trị trung bình
// input: nhập vào 5 số
let so1 = 2;
let so2 = 3;
let so3 = 4;
let so4 = 5;
let so5 = 7;
//progress: tính giá trị trung bình của 5 số
let soTrungBinh = (so1 + so2 + so3 + so4 + so5)/5;
// output: giá trị trung bình
console.log('so trung binh:',soTrungBinh);

// bài 3: quy đổi tiền
// input: nhập số tiền USD
let usd = 3;
// progress and output: tiền  quy đổi sang VND = số usd * giá USD, xuất kết quả
const priceUSD = 23500;
console.log('so tien vnd:',usd * priceUSD, 'VND');

//bài 4: tính diện tích và chu vi
// input: nhập chiều dài và chiều rộng
let dai = 5;
let rong = 3;
// progress and output: chu vi và diện tích
console.log('chu vi:',(dai + rong)*2);
console.log('dien tich:',dai * rong);

// bài 5: tổng 2 ký số
// input: nhập vào nguyên
let n = 99;
// output: tổng 2 ký số
let total = 0;
// progress: 
while(n > 0) {
   total += n % 10;
    n = Math.floor(n/10);
}

console.log('tổng 3 ký sô:',total);





