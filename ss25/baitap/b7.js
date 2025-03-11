function capitalizeWords() {
    let str = prompt("Nhập vào chuỗi:");
    if (str !== null) {
        let result = str.toLowerCase().split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        alert(result);
    }
}

capitalizeWords();
