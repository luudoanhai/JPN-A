let store = [
    { id: 1, name: "iPhone 14", price: 20000000, quantity: 5, company: "Apple" },
    { id: 2, name: "Galaxy S23", price: 18000000, quantity: 10, company: "Samsung" },
    { id: 3, name: "Xiaomi 13", price: 12000000, quantity: 8, company: "Xiaomi" },
    { id: 4, name: "iPhone 13", price: 15000000, quantity: 6, company: "Apple" }
];

let cart = [];

function displayPhonesByBrand() {
    let brand = prompt("Nhập tên hãng điện thoại (Apple, Samsung, Xiaomi...): ");
    let filteredPhones = store.filter(phone => phone.company.toLowerCase() === brand.toLowerCase());
    
    if (filteredPhones.length === 0) {
        console.log("Không có sản phẩm nào của hãng này.");
    } else {
        console.table(filteredPhones);
    }
}

function addPhone() {
    let id = store.length ? store[store.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên điện thoại:");
    let price = Number(prompt("Nhập giá điện thoại:"));
    let quantity = Number(prompt("Nhập số lượng:"));
    let company = prompt("Nhập hãng điện thoại:");

    store.push({ id, name, price, quantity, company });
    console.log("Thêm điện thoại thành công!");
}

function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let foundPhones = store.filter(phone => phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id == keyword);

    if (foundPhones.length === 0) {
        console.log("Không tìm thấy điện thoại.");
    } else {
        console.table(foundPhones);
    }
}

function buyPhone() {
    let id = Number(prompt("Nhập ID điện thoại muốn mua:"));
    let quantity = Number(prompt("Nhập số lượng muốn mua:"));

    let phone = store.find(p => p.id === id);

    if (!phone) {
        console.log("Không tìm thấy điện thoại.");
        return;
    }
    if (phone.quantity < quantity) {
        console.log("Không đủ số lượng trong kho.");
        return;
    }

    phone.quantity -= quantity;
    let cartItem = cart.find(p => p.id === id);

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...phone, quantity });
    }

    console.log("Mua thành công! Sản phẩm đã được thêm vào giỏ hàng.");
}

function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Thanh toán thành công! Tổng số tiền: ${total.toLocaleString()} VNĐ`);
    cart = [];
}

function sortPhonesByPrice() {
    let option = Number(prompt("Chọn cách sắp xếp: 1 - Tăng dần, 2 - Giảm dần"));
    if (option === 1) {
        store.sort((a, b) => a.price - b.price);
    } else if (option === 2) {
        store.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.log("Sắp xếp thành công!");
    console.table(store);
}

function main() {
    let choice;
    do {
        choice = Number(prompt(`
        === QUẢN LÝ CỬA HÀNG ĐIỆN THOẠI ===
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc ID
        4. Mua điện thoại
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo hãng
        9. Thoát chương trình
        Nhập lựa chọn của bạn:`));

        switch (choice) {
            case 1:
                displayPhonesByBrand();
                break;
            case 2:
                addPhone();
                break;
            case 3:
                searchPhone();
                break;
            case 4:
                buyPhone();
                break;
            case 5:
                checkout();
                break;
            case 6:
                sortPhonesByPrice();
                break;
            case 7:
                totalStoreValue();
                break;
            case 8:
                displayTotalStock();
                break;
            case 9:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Vui lòng nhập lại!");
                break;
        }
    } while (choice !== 9);
}

main();
