let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
let c = prompt("Nhập số c: ");
if (a != 0){
    let delta = b*b - 4 * a * c;
    if(delta < 0){
        console.log("Phương trình vô nghiệm");
    }else if(delta == 0){
        console.log("Phương trình có nghiem kép");
        let x1;
        let x2;
        x1 = x2 = b / 2 * a;
        console.log("x1 ="+ x1 +"x2 ="+ x2);
    }else{
        console.log("Phương trình có hai nghiệm phân biệt");
        x1 =( -b + Math.sqrt(delta)) / 2 * a;
        x2 = (-b - Math.sqrt(delta) )/ 2 * a;
        console.log("x1 ="+ x1 +"x2 ="+ x2);
    }
}