let listBook = [
    { id: 1, name: "A", price: 100000, quantity: 100, category: "Hành động" },
    { id: 2, name: "B", price: 100000, quantity: 100, category: "Khoa học" },
    { id: 3, name: "C", price: 100000, quantity: 100, category: "Tiểu thuyết" },
    { id: 4, name: "D", price: 100000, quantity: 100, category: "Hành động" }
];

let cart = [];
let choice;
do {
    choice = +prompt(`\nNhập lựa chọn:\n1. Hiển thị danh sách sách theo thể loại\n2. Thêm sách mới vào kho\n3. Tìm kiếm sách theo tên hoặc ID\n4. Mua sách\n5. Sắp xếp sách theo giá\n6. Tính tổng số lượng sách đã mua và tổng tiền\n7. Hiển thị tổng số lượng sách trong kho\n8. Thoát chương trình.`);
    switch (choice) {
        case 1:
            displayBookByCategory();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooksByPrice();
            break;
        case 6:
            calculateCart();
            break;
        case 7:
            displayTotalStock();
            break;
        case 8:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Vui lòng nhập lại!");
    }
} while (choice !== 8);

function displayBookByCategory() {
    let category = prompt("Nhập thể loại sách: Khoa học, Hành động, Tiểu thuyết");
    let filteredBooks = listBook.filter(book => book.category === category);
    console.log(filteredBooks.length > 0 ? filteredBooks : "Không có sách thuộc thể loại này.");
}

function addBook() {
    let name = prompt("Nhập tên sách:");
    let price = +prompt("Nhập giá sách:");
    let quantity = +prompt("Nhập số lượng:");
    let category = prompt("Nhập thể loại sách:");
    let id = listBook.length > 0 ? listBook[listBook.length - 1].id + 1 : 1;
    listBook.push({ id, name, price, quantity, category });
    console.log("Sách đã được thêm thành công!");
}

function searchBook() {
    let keyword = prompt("Nhập tên hoặc ID sách cần tìm:");
    let foundBooks = listBook.filter(book => book.name.includes(keyword) || book.id == keyword);
    console.log(foundBooks.length > 0 ? foundBooks : "Không tìm thấy sách.");
}

function buyBook() {
    let id = +prompt("Nhập ID sách muốn mua:");
    let book = listBook.find(b => b.id === id);
    if (book) {
        let quantity = +prompt(`Số lượng muốn mua (còn ${book.quantity}):`);
        if (quantity > 0 && quantity <= book.quantity) {
            book.quantity -= quantity;
            cart.push({ id: book.id, name: book.name, price: book.price, quantity });
            console.log("Mua sách thành công!");
        } else {
            console.log("Số lượng không hợp lệ!");
        }
    } else {
        console.log("Sách không tồn tại!");
    }
}

function sortBooksByPrice() {
    let order = +prompt("Nhập 1 để sắp xếp tăng dần, 2 để sắp xếp giảm dần:");
    if (order === 1) {
        listBook.sort((a, b) => a.price - b.price);
    } else if (order === 2) {
        listBook.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
    console.log(listBook);
}

function calculateCart() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    console.log(`Tổng sách đã mua: ${totalQuantity}, Tổng tiền: ${totalPrice} VND`);
}

function displayTotalStock() {
    let totalStock = listBook.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalStock}`);
}