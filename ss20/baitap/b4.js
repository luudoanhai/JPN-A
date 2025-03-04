let str = prompt("Hay nhap chuoi");
let key = prompt("Hay nhap ky tu");
let flag = 0;
  for(let i =0; i<str.length;i++){
    if(str[i]===key){
        flag++;
    }
  }
  flag!=0?document.write("ton tai trong chuoi"): document.write("khong ton tai trong chuoi");    