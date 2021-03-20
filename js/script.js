const scriptURL = "https://script.google.com/macros/s/AKfycbxU2Hc3jBjyqJt16-xipCgpgAldJw3IXD0RRzvMeiZXAm54kdhOl253Ida0F7DwkGOu/exec";
const form = document.forms["kontakandsaran"];
const tombolKirim = document.querySelector(".kirim");
const tombolLodeng = document.querySelector(".btn-lodeng");
const peringatan = document.querySelector(".alert-sukses");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    tombolLodeng.classList.toggle("d-none");
    tombolKirim.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            tombolLodeng.classList.toggle("d-none");
            tombolKirim.classList.toggle("d-none");
            peringatan.classList.toggle("d-none");
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
