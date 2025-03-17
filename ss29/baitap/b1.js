let contactList = [];
let select = 0;

do {
    select = +prompt(`
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact (name, email, phone) theo id.
        5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
        6. Thoát.
    `);

    switch (select) {
        case 1:
            addContact();
            break;
        case 2:
            showContacts();
            break;
        case 3:
            searchContact();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Thoát chương trình!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }
} while (select !== 6);

function addContact() {
    let id = contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");

    if (!name || !email || !phone) {
        console.log("Dữ liệu không hợp lệ, vui lòng nhập lại!");
        return;
    }

    let contact = { id, name, email, phone };
    contactList.push(contact);
    console.log("Đã thêm liên hệ:", contact);
}

function showContacts() {
    if (contactList.length === 0) {
        console.log("Danh bạ trống.");
    } else {
        console.table(contactList);
    }
}

function searchContact() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let found = contactList.filter(contact => contact.phone === phone);

    if (found.length === 0) {
        console.log("Không tìm thấy số điện thoại:", phone);
    } else {
        console.log("Kết quả tìm kiếm:");
        console.table(found);
    }
}

function updateContact() {
    let id = +prompt("Nhập ID liên hệ cần cập nhật:");
    let contact = contactList.find(contact => contact.id === id);

    if (!contact) {
        console.log("Không tìm thấy liên hệ có ID:", id);
        return;
    }

    let newName = prompt(`Nhập tên mới (${contact.name}):`) || contact.name;
    let newEmail = prompt(`Nhập email mới (${contact.email}):`) || contact.email;
    let newPhone = prompt(`Nhập số điện thoại mới (${contact.phone}):`) || contact.phone;

    contact.name = newName;
    contact.email = newEmail;
    contact.phone = newPhone;

    console.log("Liên hệ đã được cập nhật:", contact);
}

function deleteContact() {
    let id = +prompt("Nhập ID liên hệ cần xóa:");
    let index = contactList.findIndex(contact => contact.id === id);

    if (index === -1) {
        console.log("Không tìm thấy liên hệ có ID:", id);
        return;
    }

    contactList.splice(index, 1);
    console.log("Đã xóa liên hệ có ID:", id);
}
