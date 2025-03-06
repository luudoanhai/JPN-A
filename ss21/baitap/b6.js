let number = Number(prompt("Mời bạn nhập số:"));
document.write("Ước số của " + number + " là: ");

for (let i = 1; i <= Math.abs(number); i++) {
    if (number % i == 0) {
        document.write(i + ", " + (-i) + ", ");
    }
}
