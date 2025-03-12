function filterArray(array){
    if(!Array.isArray(array)){
        console.log("Du lieu khong hop le");
        return;
    }
    if(array.length==0){
        console.log("Mang khong co phan tu nao")
        return;
    }
    let newArray= arrayfilter((item)=>item.length>5);
    console.log(nemArray)
    return(newArray);    
}
   titleArray();