let numb = Number(prompt("Nhập số: "));
if (numb % 3 == 0 && numb % 5 == 0){
    console.log(`${numb} chia hết cho cả 3 và 5`);
}else{
    console.log(`${numb} không chia hết cho cả 3 và 5`);
}