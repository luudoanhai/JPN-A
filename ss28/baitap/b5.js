const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn A", position: "Developer" },
        { name: "Nguyễn Văn S", position: "Tester" },
        { name: "Hoàng Nam BB", position: "Manager" }
    ]
};

const companyInfoDiv = document.getElementById("company-info");
companyInfoDiv.innerHTML = `<h2>Tên công ty: ${company.name}</h2>`;
let employeeList = "<ul>";
company.employees.forEach(employee => {
    employeeList += `<li>${employee.name} - ${employee.position}</li>`;
});
employeeList += "</ul>";
companyInfoDiv.innerHTML += employeeList;