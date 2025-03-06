let numbers = [2, 5, 7, 4, 1, 8, 6];

let userInput = Number(prompt("Nhập vào một số:"));

if (numbers.includes(userInput)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}
