let employees = [];


function addEmployee(id, name, position, salary) {
    employees.push({ id, name, position, salary });
    console.log(`Đã thêm nhân viên: ${name}`);
}


function removeEmployee(id) {
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        const removed = employees.splice(index, 1);
        console.log(`Đã xóa nhân viên: ${removed[0].name}`);
    } else {
        console.log(`Không tìm thấy nhân viên với ID: ${id}`);
    }
}

function updateSalary(id, newSalary) {
    const employee = employees.find(employee => employee.id === id);
    if (employee) {
        employee.salary = newSalary;
        console.log(`Đã cập nhật lương cho nhân viên ${employee.name}: ${newSalary}`);
    } else {
        console.log(`Không tìm thấy nhân viên với ID: ${id}`);
    }
}


function searchEmployeeByName(name) {
    const results = employees.filter(employee => employee.name.includes(name));
    if (results.length > 0) {
        console.log("Kết quả tìm kiếm:");
        results.forEach(employee => console.log(employee));
    } else {
        console.log(`Không tìm thấy nhân viên nào với tên: ${name}`);
    }
}