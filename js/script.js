// Tangkap elemen card 2
let cardImage2 = document.getElementById("card-2");

// Insialisasi gambar untuk card 2
let imageList2 = ["img/projects/login-cemerlang-key.png", "img/projects/admin-landing-page.jpg"];

// Inisialisasi indeks gambar untuk card 2
let currentIndex2 = 0;

// Fungsi untuk mengubah gambar untuk card 2
function changeImageCard2() {
    cardImage2.src = imageList2[currentIndex2];
    currentIndex2 = (currentIndex2 + 1) % imageList2.length;
}

// Panggil fungsi changeImage untuk mengubah gambar setiap beberapa detik
setInterval(changeImageCard2, 3000); // Ubah gambar pada card-2 setiap 3 detik (3000 milidetik)