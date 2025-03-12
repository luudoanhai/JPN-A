function convertDateFormat(dateArray) {
    if (!Array.isArray(dateArray)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (dateArray.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let formattedDates = dateArray.map(date => {
        let parts = date.split("-");
        if (parts.length === 3) {
            return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        return "Dữ liệu không hợp lệ";
    });

    console.log(formattedDates);
}

convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]);
