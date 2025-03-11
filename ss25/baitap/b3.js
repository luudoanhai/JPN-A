function filterNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Du lieu khong hop le");
        return;
    }

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i]);
        }
    }

    if (newArray.length === 0) {
        console.log("Mang khong co so chan");
        return;
    }

    console.log(newArray);
}
