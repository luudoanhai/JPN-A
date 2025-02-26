let toanPoint = +prompt("Nhap diem toan cua ban");
let liPoint = +prompt("Nhap diem ly cua ban");
let hoaPoint =Number(prompt("Nhap diem hoa cua ban"));
let average = (toan+li+hoa)/3;
let result= average.toFixed(2);
console.log("điểm trung bình",result);