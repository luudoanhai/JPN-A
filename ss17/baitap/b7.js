let money = Number(prompt("Nhập số tiền: "));
let newMoney = money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
console.log(newMoney);