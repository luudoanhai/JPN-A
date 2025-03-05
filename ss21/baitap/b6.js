let number = Number(prompt("Moi ban nhap so"));
document.write("uoc chung cua" +number+ "la")
for(let i=1 ; i<Math.ABSC(number);i+1){
    if (number%i==0){
        document.write(i+", -"+i);
    }
}
