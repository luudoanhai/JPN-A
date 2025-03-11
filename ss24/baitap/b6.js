let choice = parseInt(prompt("Chọn chức năng:\n1. Nhập và hiển thị chuỗi\n2. Tính độ dài chuỗi\n3. Đếm số lần xuất hiện của ký tự\n4. Kiểm tra chuỗi đối xứng\n5. Chuyển đổi chữ cái đầu mỗi từ thành chữ hoa"));

switch (choice) {
    case 1:
        let inputString = prompt("Nhập chuỗi:");
        console.log("Chuỗi đã nhập:", inputString);
        break;

    case 2:
        let length = 0;
        let str = prompt("Nhập chuỗi để tính độ dài:");
        for (let i = 0; i < str.length; i++) {
            length++;
        }
        console.log("Độ dài của chuỗi:", length);
        break;

    case 3:
        let searchString = prompt("Nhập chuỗi:");
        let searchChar = prompt("Nhập ký tự cần đếm:");
        let count = 0;
        for (let i = 0; i < searchString.length; i++) {
            if (searchString[i] === searchChar) {
                count++;
            }
        }
        console.log(`Số lần xuất hiện của '${searchChar}':`, count);
        break;

    case 4:
        let palindromeString = prompt("Nhập chuỗi để kiểm tra đối xứng:");
        let isPalindrome = true;
        for (let i = 0; i < Math.floor(palindromeString.length / 2); i++) {
            if (palindromeString[i] !== palindromeString[palindromeString.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        console.log("Chuỗi có đối xứng không?", i
