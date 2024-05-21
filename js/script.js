// Tangkap elemen id pada card
let cardImage1 = document.getElementById("card-1");
let cardImage2 = document.getElementById("card-2");
let cardImage3 = document.getElementById("card-3");

// Insialisasi gambar untuk card 2
let imageList1 = ["img/projects/sistem-informasi-keuangan.jpg", "img/projects/login-sik.png"]
let imageList2 = ["img/projects/login-cemerlang-key.png", "img/projects/admin-landing-page.jpg", "img/projects/galeri-ck.png", "img/projects/layanan-ck.png", "img/projects/video-ck.png"];
let imageList3 = ["img/projects/ck-layanan.png", "img/projects/ck-footer.png", "img/projects/landing-page_cemerlang-key.jpg"];

// Inisialisasi indeks gambar untuk pada card
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

// Fungsi untuk mengubah gambar untuk card 2
function changeImageCard1() {
    cardImage1.src = imageList1[currentIndex1];
    currentIndex1 = (currentIndex1 + 1) % imageList1.length;
}

// Fungsi untuk mengubah gambar untuk card 2
function changeImageCard2() {
    cardImage2.src = imageList2[currentIndex2];
    currentIndex2 = (currentIndex2 + 1) % imageList2.length;
}

// Fungsi untuk mengubah gambar untuk card 3
function changeImageCard3() {
    cardImage3.src = imageList3[currentIndex3];
    currentIndex3 = (currentIndex3 + 1) % imageList3.length;
}

// Panggil fungsi changeImage untuk mengubah gambar setiap beberapa detik
setInterval(changeImageCard1, 4000); // Ubah gambar pada card-1 setiap 4 detik (4000 milidetik)
setInterval(changeImageCard2, 3000); // Ubah gambar pada card-2 setiap 3 detik (3000 milidetik)
setInterval(changeImageCard3, 5000); // Ubah gambar pada card-2 setiap 5 detik (5000 milidetik)