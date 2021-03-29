const scriptURL = "https://script.google.com/macros/s/AKfycbxU2Hc3jBjyqJt16-xipCgpgAldJw3IXD0RRzvMeiZXAm54kdhOl253Ida0F7DwkGOu/exec";
const form = document.forms["kontakandsaran"];
const tombolKirim = document.querySelector(".kirim");
const tombolLodeng = document.querySelector(".btn-lodeng");
const peringatan = document.querySelector(".alert-sukses");
const senin = document.querySelector(".hari-senin");
const selasa = document.querySelector(".hari-selasa");
const rabu = document.querySelector(".hari-rabu");
const kamis = document.querySelector(".hari-kamis");
const jumat = document.querySelector(".hari-jumat");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const message = document.getElementById("message-pesan");

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

senin.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('img/gambarkota.jpg')";
});
selasa.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('img/gambarbukit.jpg')";
});
rabu.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('img/gambarpantai.jpg')";
});
kamis.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('img/gambarpantai2.jpg')";
});
jumat.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('img/gambarlari.jpg')";
});

alert("Untuk Materi Masih ada yang belum selesai");
