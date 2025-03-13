let choice;
let arr=[];
do{
    choice=+prompt(
        `               MENU
        1. Nhập danh sách số nguyên
        2. Tính trung bình các số.
        3. Tìm số chẵn lớn nhất.
        4. Tìm số lẻ nhỏ nhất.
        5. Thoát.
        Lựa chọn của bạn là:
        `)
    switch(choice){
        case 1:
            addNumber();
            break;
        case 2:
            averageNumber(arr);
            break;
        case 3:
            maxNumber(arr);
            break;
        case 4:
            minNumber(arr);
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình")
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice!=5);
function addNumber(){
    let number;
    do{
        number = +prompt("Nhập số lượng phần tử bạn muốn thêm vào mảng: ");
        if (!Number.isInteger(number) || number < 0) {
            alert("Vui lòng nhập một số nguyên.");
        }
    }while(!Number.isInteger(number) || number < 0)
    for (let i = 0; i < number; i++) {
        do{
            arr[i]=+prompt("Nhập phần tử thứ "+(i+1)+": ");
            if (!Number.isInteger(Number(arr[i]))) {
                alert("Vui lòng nhập một số nguyên.");
            }
        }while(!Number.isInteger(Number(arr[i])))
    }
    console.log(arr);
}

function averageNumber(arr){
    let sum=arr.reduce((item,index)=> item + index , 0);
    let average=sum/arr.length;
    console.log(`Trung bình các số là ${average}`);
}

function maxNumber(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            max=arr[i];
            break;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max && arr[i]%2==0){
            max=arr[i];
        }
    }
    console.log(`Số chẵn lớn nhất là ${max}`)
}

function minNumber(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            min=arr[i];
            break;
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min && arr[i]%2!=0){
            min=arr[i]
        }
    }
    console.log(`Số lẻ nhỏ nhất là ${min}`)
}