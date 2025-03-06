let n = Number(prompt("Nhập số nguyên: "));
let count = 0;
let numb = 2;
let str = "";
if (!Number.isInteger(n) || n <= 0) {
    console.log("Không hợp lệ");
}else{
    while (count < n) {
        let isPrime = true; 
        for (let i = 2; i * i <= numb; i++) {
            if (numb % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            str += numb + " ";
            count++;
        }
        numb++;
    }
    console.log(str);    
}