function updateGajiPokok() {
    const golongan = document.getElementById("golongan").value;
    let gajiPokok;

    switch (golongan) {
        case "IIIA":
            gajiPokok = 2785700;
            break;
        case "IIIB":
            gajiPokok = 2903600;
            break;
        case "IIIC":
            gajiPokok = 3026400;
            break;
        case "IIID":
            gajiPokok = 3154400;
            break;
        default:
            gajiPokok = 0;
    }

    document.getElementById("gajiPokok").value = gajiPokok;
    updateTunjanganKeluarga();
    updateTunjanganJabatan(); // Update tunjangan jabatan setiap kali gaji pokok berubah
    updateGajiBersih(); // Update gaji bersih setiap kali gaji pokok berubah
}

function updateTunjanganKeluarga() {
    const gajiPokok = parseFloat(document.getElementById("gajiPokok").value);
    const tunjanganKeluarga = gajiPokok * 0.1; // 10% dari gaji pokok
    document.getElementById("tunjanganKeluarga").value = tunjanganKeluarga;
    updateGajiBersih(); // Update gaji bersih setiap kali tunjangan keluarga berubah
}

function updateTunjanganAnak() {
    const gajiPokok = parseFloat(document.getElementById("gajiPokok").value);
    const jmlhAnak = parseInt(document.getElementById("jmlhAnak").value);
    let tunjanganAnak = 0;

    if (jmlhAnak === 1) {
        tunjanganAnak = gajiPokok * 0.05; // 5%
    } else if (jmlhAnak === 2) {
        tunjanganAnak = gajiPokok * 0.08; // 8%
    } else if (jmlhAnak === 3) {
        tunjanganAnak = gajiPokok * 0.12; // 12%
    }

    document.getElementById("tunjanganAnak").value = tunjanganAnak;
    updateGajiBersih(); // Update gaji bersih setiap kali tunjangan anak berubah
}

function updateTunjanganJabatan() {
    const jabatan = document.getElementById("jabatan").value;
    const gajiPokok = parseFloat(document.getElementById("gajiPokok").value);
    let tunjanganJabatan = 0;

    switch (jabatan) {
        case "asisten ahli":
            tunjanganJabatan = 300000;
            break;
        case "lektor":
            tunjanganJabatan = 700000;
            break;
        case "lektor kepala":
            tunjanganJabatan = 1300000;
            break;
        case "guru besar":
            tunjanganJabatan = gajiPokok * 3; // Gaji pokok dikali 3
            break;
        default:
            tunjanganJabatan = 0;
    }

    document.getElementById("tunjanganJabatan").value = tunjanganJabatan;
    updateGajiBersih(); // Update gaji bersih setiap kali tunjangan jabatan berubah
}

function updateGajiBersih() {
    const gajiPokok =
        parseFloat(document.getElementById("gajiPokok").value) || 0;
    const tunjanganKeluarga =
        parseFloat(document.getElementById("tunjanganKeluarga").value) || 0;
    const tunjanganAnak =
        parseFloat(document.getElementById("tunjanganAnak").value) || 0;
    const tunjanganJabatan =
        parseFloat(document.getElementById("tunjanganJabatan").value) || 0;

    const gajiBersih =
        gajiPokok + tunjanganKeluarga + tunjanganAnak + tunjanganJabatan;
    document.getElementById("gajiBersih").value = gajiBersih;
}

function simpanData() {
    const nik = document.getElementById("nik").value;
    const name = document.getElementById("name").value;
    const golongan = document.getElementById("golongan").value;
    const gajiPokok = parseFloat(document.getElementById("gajiPokok").value);
    const statusKeluarga = document.getElementById("statusKeluarga").value;
    const tunjanganKeluarga = parseFloat(
        document.getElementById("tunjanganKeluarga").value
    );
    const jmlhAnak = parseInt(document.getElementById("jmlhAnak").value);
    const tunjanganAnak = parseFloat(
        document.getElementById("tunjanganAnak").value
    );
    const jabatan = document.getElementById("jabatan").value;
    const tunjanganJabatan = parseFloat(
        document.getElementById("tunjanganJabatan").value
    );
    const gajiBersih = parseFloat(document.getElementById("gajiBersih").value);

    const newEmployee = {
        nik: nik,
        name: name,
        golongan: golongan,
        gajiPokok: gajiPokok,
        statusKeluarga: statusKeluarga,
        tunjanganKeluarga: tunjanganKeluarga,
        jmlhAnak: jmlhAnak,
        tunjanganAnak: tunjanganAnak,
        jabatan: jabatan,
        tunjanganJabatan: tunjanganJabatan,
        gajiBersih: gajiBersih,
    };

    const transaction = db.transaction(["employe"], "readwrite");
    const employeStore = transaction.objectStore("employe");
    const request = employeStore.add(newEmployee);

    request.onsuccess = function () {
        console.log("Data employee saved successfully:", newEmployee);
        alert("Data employee saved successfully!");
        document.getElementById("employeeForm").reset(); // Reset form after saving
    };

    request.onerror = function (event) {
        console.error("Error saving data:", event.target.error);
        alert("Error saving data.");
    };
}

function simpanData() {
    const nik = document.getElementById("nik").value;
    const name = document.getElementById("name").value;
    const golongan = document.getElementById("golongan").value;
    const gajiPokok = parseFloat(document.getElementById("gajiPokok").value);
    const statusKeluarga = document.getElementById("statusKeluarga").value;
    const tunjanganKeluarga = parseFloat(
        document.getElementById("tunjanganKeluarga").value
    );
    const jmlhAnak = parseInt(document.getElementById("jmlhAnak").value);
    const tunjanganAnak = parseFloat(
        document.getElementById("tunjanganAnak").value
    );
    const jabatan = document.getElementById("jabatan").value;
    const tunjanganJabatan = parseFloat(
        document.getElementById("tunjanganJabatan").value
    );
    const gajiBersih = parseFloat(document.getElementById("gajiBersih").value);

    const newEmployee = {
        nik: nik,
        name: name,
        golongan: golongan,
        gajiPokok: gajiPokok,
        statusKeluarga: statusKeluarga,
        tunjanganKeluarga: tunjanganKeluarga,
        jmlhAnak: jmlhAnak,
        tunjanganAnak: tunjanganAnak,
        jabatan: jabatan,
        tunjanganJabatan: tunjanganJabatan,
        gajiBersih: gajiBersih,
    };

    // Membuka transaksi untuk menambahkan data ke store "employe"
    const transaction = db.transaction(["employe"], "readwrite");
    const employeStore = transaction.objectStore("employe");
    const request = employeStore.add(newEmployee);

    request.onsuccess = function () {
        console.log("Data employee saved successfully:", newEmployee);
        alert("Data employee saved successfully!");
        document.getElementById("employeeForm").reset(); // Reset form setelah menyimpan
    };

    request.onerror = function (event) {
        console.error("Error saving data:", event.target.error);
        alert("Error saving data.");
    };
}

// tampil data employe
document.getElementById("showEmployeData").addEventListener("click", function () {
    let transaction = db.transaction(["employe"], "readonly");
    let objectStore = transaction.objectStore("employe");
    let request = objectStore.openCursor();
    let tableBody = document.querySelector("#employeTable tbody");
    tableBody.innerHTML = "";

    request.onsuccess = function (event) {
        let cursor = event.target.result;
        if (cursor) {
            let row = tableBody.insertRow();
            row.insertCell().textContent = cursor.value.id;
            row.insertCell().textContent = cursor.value.nik;
            row.insertCell().textContent = cursor.value.name;
            row.insertCell().textContent = cursor.value.golongan;
            row.insertCell().textContent = cursor.value.gajiPokok;
            row.insertCell().textContent = cursor.value.statusKeluarga;
            row.insertCell().textContent = cursor.value.tunjanganKeluarga;
            row.insertCell().textContent = cursor.value.jmlhAnak;
            row.insertCell().textContent = cursor.value.tunjanganAnak;
            row.insertCell().textContent = cursor.value.jabatan;
            row.insertCell().textContent = cursor.value.tunjanganJabatan;
            row.insertCell().textContent = cursor.value.gajiBersih;

            // Add Delete button
            let actionCell = row.insertCell();
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function () {
                deleteEmployee(cursor.value.id);
            };
            actionCell.appendChild(deleteButton);

            // Add Update button
            let actionCel = row.insertCell();
            let updateButton = document.createElement("button");
            updateButton.textContent = "Update";
            updateButton.onclick = function () {
                loadEmployeeDataForUpdate(cursor.value);
            };
            actionCel.appendChild(updateButton);    

            cursor.continue();
        }
    };
});

function deleteEmployee(id) {
    let transaction = db.transaction(["employe"], "readwrite");
    let objectStore = transaction.objectStore("employe");
    let request = objectStore.delete(id);

    request.onsuccess = function () {
        console.log("Employee deleted with ID:", id);
        alert("Employee deleted successfully!");
        document.getElementById("showEmployeData").click(); // Refresh table
    };

    request.onerror = function (event) {
        console.error("Error deleting employee:", event.target.error);
        alert("Error deleting employee.");
    };
}

function loadEmployeeDataForUpdate(employee) {
    document.getElementById("updateId").value = employee.id;
    document.getElementById("updateNik").value = employee.nik;
    document.getElementById("updateName").value = employee.name;
    document.getElementById("updateGolongan").value = employee.golongan;
    document.getElementById("updateGajiPokok").value = employee.gajiPokok;
    document.getElementById("updateStatusKeluarga").value = employee.statusKeluarga;
    document.getElementById("updateTunjanganKeluarga").value = employee.tunjanganKeluarga;
    document.getElementById("updateJmlhAnak").value = employee.jmlhAnak;
    document.getElementById("updateTunjanganAnak").value = employee.tunjanganAnak;
    document.getElementById("updateJabatan").value = employee.jabatan;
    document.getElementById("updateTunjanganJabatan").value = employee.tunjanganJabatan;
    document.getElementById("updateGajiBersih").value = employee.gajiBersih;

    document.getElementById("updateEmployeeForm").style.display = "block";

    // Trigger calculations
    updateUpdateGajiPokok();
    updateUpdateTunjanganKeluarga();
    updateUpdateTunjanganAnak();
    updateUpdateTunjanganJabatan();
    updateUpdateGajiBersih();
}


function updateUpdateGajiPokok() {
    const golongan = document.getElementById("updateGolongan").value;
    let gajiPokok;

    switch (golongan) {
        case "IIIA":
            gajiPokok = 2785700;
            break;
        case "IIIB":
            gajiPokok = 2903600;
            break;
        case "IIIC":
            gajiPokok = 3026400;
            break;
        case "IIID":
            gajiPokok = 3154400;
            break;
        default:
            gajiPokok = 0;
    }

    document.getElementById("updateGajiPokok").value = gajiPokok;
    updateUpdateTunjanganKeluarga();
    updateUpdateTunjanganJabatan();
    updateUpdateGajiBersih();
}

function updateUpdateTunjanganKeluarga() {
    const gajiPokok = parseFloat(document.getElementById("updateGajiPokok").value) || 0;
    const tunjanganKeluarga = gajiPokok * 0.1; // 10% dari gaji pokok
    document.getElementById("updateTunjanganKeluarga").value = tunjanganKeluarga;
    updateUpdateGajiBersih();
}

function updateUpdateTunjanganAnak() {
    const gajiPokok = parseFloat(document.getElementById("updateGajiPokok").value) || 0;
    const jmlhAnak = parseInt(document.getElementById("updateJmlhAnak").value) || 0;
    let tunjanganAnak = 0;

    if (jmlhAnak === 1) {
        tunjanganAnak = gajiPokok * 0.05; // 5%
    } else if (jmlhAnak === 2) {
        tunjanganAnak = gajiPokok * 0.08; // 8%
    } else if (jmlhAnak === 3) {
        tunjanganAnak = gajiPokok * 0.12; // 12%
    }

    document.getElementById("updateTunjanganAnak").value = tunjanganAnak;
    updateUpdateGajiBersih();
}

function updateUpdateTunjanganJabatan() {
    const jabatan = document.getElementById("updateJabatan").value;
    const gajiPokok = parseFloat(document.getElementById("updateGajiPokok").value) || 0;
    let tunjanganJabatan = 0;

    switch (jabatan) {
        case "asisten ahli":
            tunjanganJabatan = 300000;
            break;
        case "lektor":
            tunjanganJabatan = 700000;
            break;
        case "lektor kepala":
            tunjanganJabatan = 1300000;
            break;
        case "guru besar":
            tunjanganJabatan = gajiPokok * 3; // Gaji pokok dikali 3
            break;
        default:
            tunjanganJabatan = 0;
    }

    document.getElementById("updateTunjanganJabatan").value = tunjanganJabatan;
    updateUpdateGajiBersih();
}

function updateUpdateGajiBersih() {
    const gajiPokok = parseFloat(document.getElementById("updateGajiPokok").value) || 0;
    const tunjanganKeluarga = parseFloat(document.getElementById("updateTunjanganKeluarga").value) || 0;
    const tunjanganAnak = parseFloat(document.getElementById("updateTunjanganAnak").value) || 0;
    const tunjanganJabatan = parseFloat(document.getElementById("updateTunjanganJabatan").value) || 0;

    const gajiBersih = gajiPokok + tunjanganKeluarga + tunjanganAnak + tunjanganJabatan;
    document.getElementById("updateGajiBersih").value = gajiBersih;
}


function updateEmployee() {
    const id = parseInt(document.getElementById("updateId").value);
    const nik = document.getElementById("updateNik").value;
    const name = document.getElementById("updateName").value;
    const golongan = document.getElementById("updateGolongan").value;
    const gajiPokok = parseFloat(document.getElementById("updateGajiPokok").value);
    const statusKeluarga = document.getElementById("updateStatusKeluarga").value;
    const tunjanganKeluarga = parseFloat(document.getElementById("updateTunjanganKeluarga").value);
    const jmlhAnak = parseInt(document.getElementById("updateJmlhAnak").value);
    const tunjanganAnak = parseFloat(document.getElementById("updateTunjanganAnak").value);
    const jabatan = document.getElementById("updateJabatan").value;
    const tunjanganJabatan = parseFloat(document.getElementById("updateTunjanganJabatan").value);
    const gajiBersih = parseFloat(document.getElementById("updateGajiBersih").value);

    const updatedEmployee = {
        id: id,
        nik: nik,
        name: name,
        golongan: golongan,
        gajiPokok: gajiPokok,
        statusKeluarga: statusKeluarga,
        tunjanganKeluarga: tunjanganKeluarga,
        jmlhAnak: jmlhAnak,
        tunjanganAnak: tunjanganAnak,
        jabatan: jabatan,
        tunjanganJabatan: tunjanganJabatan,
        gajiBersih: gajiBersih,
    };

    const transaction = db.transaction(["employe"], "readwrite");
    const employeStore = transaction.objectStore("employe");
    const request = employeStore.put(updatedEmployee);

    request.onsuccess = function () {
        console.log("Employee updated successfully:", updatedEmployee);
        alert("Employee updated successfully!");
        document.getElementById("updateEmployeeForm").reset();
        document.getElementById("updateEmployeeForm").style.display = "none";
        document.getElementById("showEmployeData").click(); // Refresh table
    };

    request.onerror = function (event) {
        console.error("Error updating employee:", event.target.error);
        alert("Error updating employee.");
    };
}






