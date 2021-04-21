const scriptURL = "https://script.google.com/macros/s/AKfycbxU2Hc3jBjyqJt16-xipCgpgAldJw3IXD0RRzvMeiZXAm54kdhOl253Ida0F7DwkGOu/exec";
const form = document.forms["kontakandsaran"];
const tombolKirim = document.querySelector(".kirim");
const tombolLodeng = document.querySelector(".btn-lodeng");
const peringatan = document.querySelector(".alert-sukses");
const background1 = document.querySelector(".box-home .box-inner .select-background ul li div.bg1");
const background2 = document.querySelector(".box-home .box-inner .select-background ul li div.bg2");
const background3 = document.querySelector(".box-home .box-inner .select-background ul li div.bg3");
const background4 = document.querySelector(".box-home .box-inner .select-background ul li div.bg4");
const background5 = document.querySelector(".box-home .box-inner .select-background ul li div.bg5");
const boxday = document.querySelectorAll(".box-day");
const boxmateri = document.querySelectorAll(".box-materi");
const boxdatacs = document.querySelectorAll(".box-data-cs");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const message = document.getElementById("message-pesan");

const buttonhome = document.querySelector("#home .container-sm .collapse ul li.nav-item a.tombolhome");
const buttonrateus = document.querySelector("#home .container-sm .collapse ul li.nav-item a.tombolrateus");
const buttonsenin = document.querySelector("ul.dropdown-menu li.pembatas a.hari-senin");
const buttonselasa = document.querySelector("ul.dropdown-menu li.pembatas a.hari-selasa");
const buttonrabu = document.querySelector("ul.dropdown-menu li.pembatas a.hari-rabu");
const buttonkamis = document.querySelector("ul.dropdown-menu li.pembatas a.hari-kamis");
const buttonjumat = document.querySelector("ul.dropdown-menu li.pembatas a.hari-jumat");
const buttonalgoprak = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-algoprak");
const buttonalgoteo = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-algoteo");
const buttonbahasaenggres = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-bahasaenggres");
const buttonbasdatprak = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-basdatprak");
const buttonbasdatteo = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-basdatteo");
const buttonsistemope = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-sistemope");
const buttonrpl = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-rpl");
const buttonagama = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-agama");
const buttonalin = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-alin");
const buttonkwn = document.querySelector("ul.dropdown-menu li.pembatas a.matkul-kwn");
const tampilhome = document.getElementById("home-page");
const tampilrateus = document.getElementById("kontak-saran");
const tampilsenin = document.getElementById("senin");
const tampilselasa = document.getElementById("selasa");
const tampilrabu = document.getElementById("rabu");
const tampilkamis = document.getElementById("kamis");
const tampiljumat = document.getElementById("jumat");
const tampilalgoprak = document.getElementById("algoprak");
const tampilalgoteo = document.getElementById("algoteo");
const tampilbahasaenggres = document.getElementById("bahasaenggres");
const tampilbasdatprak = document.getElementById("basdatprak");
const tampilbasdatteo = document.getElementById("basdatteo");
const tampilsistemope = document.getElementById("sistemope");
const tampilrpl = document.getElementById("rpl");
const tampilagama = document.getElementById("agama");
const tampilalin = document.getElementById("alin");
const tampilkwn = document.getElementById("kwn");

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

function settime(time) {
    const keteranganwaktu = document.getElementById("keterangan-waktu");
    if (time >= 00 && time < 10) {
        keteranganwaktu.innerHTML = "Morning";
    } else if (time >= 10 && time < 15) {
        keteranganwaktu.innerHTML = "Evening";
    } else if (time >= 15 && time < 21) {
        keteranganwaktu.innerHTML = "Afternoon";
    } else {
        keteranganwaktu.innerHTML = "Night";
    }
}

function time() {
    const now = new Date();
    const calender = document.getElementById("calender");
    const clock = document.getElementById("clock");
    let tahun = now.getFullYear();
    let bulan = now.getMonth();
    let tanggal = now.getDate();
    let jam = now.getHours();
    let menit = now.getMinutes();
    let detik = now.getSeconds();

    if (bulan === 0) {
        bulan = "January";
    } else if (bulan === 1) {
        bulan = "February";
    } else if (bulan === 2) {
        bulan = "March";
    } else if (bulan === 3) {
        bulan = "April";
    } else if (bulan === 4) {
        bulan = "May";
    } else if (bulan === 5) {
        bulan = "June";
    } else if (bulan === 6) {
        bulan = "July";
    } else if (bulan === 7) {
        bulan = "August";
    } else if (bulan === 8) {
        bulan = "September";
    } else if (bulan === 9) {
        bulan = "October";
    } else if (bulan === 10) {
        bulan = "November";
    } else {
        bulan = "December";
    }

    if (jam < 10) {
        jam = "0" + jam;
    }
    if (menit < 10) {
        menit = "0" + menit;
    }
    if (detik < 10) {
        detik = "0" + detik;
    }

    var timeatas = tanggal + " " + bulan + " " + tahun;
    var timebawah = jam + " : " + menit + " : " + detik;
    settime(jam);
    calender.innerHTML = timeatas;
    clock.innerHTML = timebawah;
}

let interval = setInterval(time, 1000);

// Set Hilang

for (let index = 0; index < boxmateri.length; index++) {
    boxmateri[index].classList.add("d-none");
}
for (let index = 0; index < boxday.length; index++) {
    boxday[index].classList.add("d-none");
}
for (let index = 0; index < boxdatacs.length; index++) {
    boxdatacs[index].classList.add("d-none");
}

buttonrateus.addEventListener("click", () => {
    tampilrateus.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonsenin.addEventListener("click", () => {
    tampilsenin.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonselasa.addEventListener("click", () => {
    tampilselasa.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonrabu.addEventListener("click", () => {
    tampilrabu.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonkamis.addEventListener("click", () => {
    tampilkamis.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonjumat.addEventListener("click", () => {
    tampiljumat.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonalgoprak.addEventListener("click", () => {
    tampilalgoprak.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonalgoteo.addEventListener("click", () => {
    tampilalgoteo.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonbahasaenggres.addEventListener("click", () => {
    tampilbahasaenggres.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonbasdatprak.addEventListener("click", () => {
    tampilbasdatprak.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonbasdatteo.addEventListener("click", () => {
    tampilbasdatteo.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonsistemope.addEventListener("click", () => {
    tampilsistemope.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonrpl.addEventListener("click", () => {
    tampilrpl.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonagama.addEventListener("click", () => {
    tampilagama.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonalin.addEventListener("click", () => {
    tampilalin.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});
buttonkwn.addEventListener("click", () => {
    tampilkwn.classList.remove("d-none");
    tampilhome.classList.add("d-none");
});

buttonhome.addEventListener("click", () => {
    tampilhome.classList.toggle("d-none");
});

// Akhir set

let hari = new Date().getDay();
const day = document.getElementById("day");
const button = document.querySelector("#day");
if (hari === 1) {
    day.innerHTML = "Monday";
    button.setAttribute("href", "#senin");
    day.addEventListener("click", () => {
        tampilsenin.classList.remove("d-none");
    });
} else if (hari === 2) {
    day.innerHTML = "Tuesday";
    button.setAttribute("href", "#selasa");
    day.addEventListener("click", () => {
        tampilselasa.classList.remove("d-none");
    });
} else if (hari === 3) {
    day.innerHTML = "Wednesday";
    button.setAttribute("href", "#rabu");
    day.addEventListener("click", () => {
        tampilrabu.classList.remove("d-none");
    });
} else if (hari === 4) {
    day.innerHTML = "Thursday";
    button.setAttribute("href", "#kamis");
    day.addEventListener("click", () => {
        tampilkamis.classList.remove("d-none");
    });
} else if (hari === 5) {
    day.innerHTML = "Friday";
    button.setAttribute("href", "#jumat");
    day.addEventListener("click", () => {
        tampiljumat.classList.remove("d-none");
    });
} else if (hari === 6) {
    day.innerHTML = "Saturday";
} else {
    day.innerHTML = "Sunday";
}

background1.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(125deg, rgb(105, 183, 228), rgb(173, 216, 230))";
});
background2.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(125deg, rgb(236, 120, 207), rgb(173, 216, 230))";
});
background3.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(125deg, rgb(94, 201, 90), rgb(238, 170, 82))";
});
background4.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(125deg, rgb(230, 79, 142), rgb(104, 201, 95))";
});
background5.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(125deg, rgb(82, 204, 174), rgb(172, 73, 218))";
});

alert("1. Untuk Materi masih ada yang belum selesai\n2. Belum Responsive Untuk HP");
