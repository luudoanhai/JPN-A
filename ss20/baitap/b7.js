let strFibonaci = " 0 1 ";
let numb = Number(prompt("Nhập số: "));
let f1=0;
let f2=1;
let fnew;
if (!Number.isInteger(numb) || numb <= 0) {
    console.log("Không hợp lệ");
}else{
    for (let i = 0; i < numb - 2; i++) {
        fnew = f1 + f2;
        f1 = f2;
        f2 = fnew;
        strFibonaci += fnew + " ";
    }
    strFibonaci = strFibonaci.slice(0,-1);
    console.log(strFibonaci);
}