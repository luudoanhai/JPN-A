let products = [];

while (true) {
    let choice = +prompt(`
        Chọn chức năng:
        1. Thêm sản phẩm vào danh sách.
        2. Hiển thị danh sách sản phẩm.
        3. Tìm kiếm sản phẩm theo tên.
        4. Cập nhật sản phẩm theo ID.
        5. Xóa sản phẩm theo ID.
        6. Thoát.
    `);

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            showProduct();
            break;
        case 3:
            searchProduct();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }

    if (choice === 6) break;
}

function addProduct() {
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá sản phẩm:");
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = +prompt("Nhập số lượng:");

    if (!name || isNaN(price) || price <= 0 || !category || isNaN(quantity) || quantity < 0) {
        console.log("Dữ liệu không hợp lệ, vui lòng nhập lại!");
        return;
    }

    let product = { id, name, price, category, quantity };
    products.push(product);
    console.log("Thêm sản phẩm thành công:", product);
}

function showProduct() {
    if (products.length === 0) {
        console.log("Không có sản phẩm nào trong danh sách.");
    } else {
        console.table(products);
    }
}

function searchProduct() {
    let keyword = prompt("Nhập tên sản phẩm cần tìm:");
    let result = products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));

    if (result.length === 0) {
        console.log("Không tìm thấy sản phẩm nào.");
    } else {
        console.table(result);
    }
}

function updateProduct() {
    let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let index = products.findIndex(p => p.id === id);

    if (index === -1) {
        console.log("Không tìm thấy sản phẩm.");
        return;
    }

    let name = prompt("Nhập tên mới (bỏ qua nếu không muốn thay đổi):");
    let price = +prompt("Nhập giá mới (bỏ qua nếu không muốn thay đổi):");
    let category = prompt("Nhập danh mục mới (bỏ qua nếu không muốn thay đổi):");
    let quantity = +prompt("Nhập số lượng mới (bỏ qua nếu không muốn thay đổi):");

    if (name) products[index].name = name;
    if (!isNaN(price) && price > 0) products[index].price = price;
    if (category) products[index].category = category;
    if (!isNaN(quantity) && quantity >= 0) products[index].quantity = quantity;

    console.log("Cập nhật sản phẩm thành công!", products[index]);
}