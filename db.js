let db;
window.onload = function () {
    let request = indexedDB.open("USTI", 1);
    request.onupgradeneeded = function (event) {
        db = event.target.result;

        // buat employe store
        let employeStore = db.createObjectStore("employe", {
            keyPath: "id",
            autoIncrement: true,
        });

        employeStore.createIndex("nik", "nik", { unique: false });
        employeStore.createIndex("name", "name", { unique: false });
        employeStore.createIndex("golongan", "golongan", { unique: false });
        employeStore.createIndex("gajiPokok", "gajiPokok", { unique: false });
        employeStore.createIndex("statusKeluarga", "statusKeluarga", {
            unique: false,
        });
        employeStore.createIndex("tunjanganKeluarga", "tunjanganKeluarga", {
            unique: false,
        });
        employeStore.createIndex("jmlhAnak", "jmlhAnak", { unique: false });
        employeStore.createIndex("tunjanganAnak", "tunjanganAnak", {
            unique: false,
        });
        employeStore.createIndex("jabatan", "jabatan", { unique: false });
        employeStore.createIndex("tunjanganJabatan", "tunjanganJabatan", {
            unique: false,
        });
        employeStore.createIndex("gajiBersih", "gajiBersih", { unique: false });

        // buat studenstore
        let studentStore = db.createObjectStore("student", {
            keyPath: "id",
            autoIncrement: true,
        });
    };
    request.onsuccess = function (event) {
        db = event.target.result;
        console.log("Database opened successfully");
    };
    request.onerror = function (event) {
        console.log("Error opening database: " + event.target.errorCode);
    };
};