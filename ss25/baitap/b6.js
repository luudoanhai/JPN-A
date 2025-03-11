function checkPalindrome() {
    let str = prompt("Nhập vào chuỗi cần kiểm tra:");
    if (str !== null) {
        let result = str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
            ? `"${str}" là chuỗi đối xứng`
            : `"${str}" không phải là chuỗi đối xứng"`;
        alert(result);
    }
}

checkPalindrome();
