let text = prompt("Nhập một ký tự: ");
if (text.includes("0") || text.includes("1") || text.includes("2") || text.includes("3") || text.includes("4") || text.includes("5") ||text.includes("6") || text.includes("7") || text.includes("8") || text.includes("9")){
    console.log(`Ký tự ${text} không phải là kí tự`);
}
else{
    console.log(`Ký tự ${text} là một kí tự`);
}