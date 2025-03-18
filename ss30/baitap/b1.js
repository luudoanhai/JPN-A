let products = [
    { id: 1, name: "men men", category: "mon an dan toc Kinh", price: 50000, quantity: 10 },
    { id: 2, name: "mut", category: "mon an dan toc Mong", price: 120000, quantity: 5 },
];

let cart = [];

while (true) {
    let choice = +prompt(`
        1. Hien thi san pham theo danh muc
        2. Di mua hang
        3. Sap xep san pham theo gia
        4. Tinh hoa don
        5. Thoat
    `);
    
    if (choice) {
        switch (choice) {
            case 1:
                showProductByCategory();
                break;
            case 2:
                addToCart();
                break;
            case 3:
                sortProductsByPrice();
                break;
            case 4:
                calculateBill();
                break;
            case 5:
                console.log("Thoat chuong trinh.");
                exit();
                break;
            default:
                console.log("Lua chon khong hop le.");
        }
    }
}

// Hien thi san pham theo danh muc
function showProductByCategory() {
    let choice = +prompt(`
        1. Mon an dan toc Kinh
        2. Mon an dan toc Mong
    `);
    
    let category = choice === 1 ? "mon an dan toc Kinh" : choice === 2 ? "mon an dan toc Mong" : null;
    
    if (category) {
        let result = products.filter(item => item.category === category);
        console.log("San pham thuoc danh muc:", result);
    } else {
        console.log("Lua chon khong hop le");
    }
}

// Them san pham vao gio hang
function addToCart() {
    let productID = +prompt("Nhap ID san pham can mua");
    let productIndex = products.findIndex(item => item.id === productID);
    
    if (productIndex !== -1) {
        let quantity = +prompt("Nhap so luong");
        
        if (quantity > products[productIndex].quantity) {
            console.log(`San pham ko du, con lai ${products[productIndex].quantity}`);
        } else {
            products[productIndex].quantity -= quantity;
            
            let cartIndex = cart.findIndex(item => item.id === productID);
            if (cartIndex !== -1) {
                cart[cartIndex].quantity += quantity;
            } else {
                cart.push({ ...products[productIndex], quantity });
            }
            console.log("Da them vao gio hang:", cart);
        }
    } else {
        console.log("San pham khong ton tai");
    }
}

// Sap xep san pham theo gia
function sortProductsByPrice() {
    let sortedProducts = [...products].sort((a, b) => a.price - b.price);
    console.log("San pham sau khi sap xep:", sortedProducts);
}

// Tinh hoa don
function calculateBill() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tong hoa don: ${total} VND`);
}