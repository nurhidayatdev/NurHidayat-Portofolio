$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".non-active").click(function () {
    $("nav").toggleClass("active");
  });
});

document.getElementById("tombol-about1").onclick = function () {
  Swal.fire(
    "Jadwal Mata Pelajaran",
    "Proyek ini adalah sebuah aplikasi jadwal mata pelajaran untuk kelas XII MIPA 4. Aplikasi ini bertujuan untuk membantu siswa dan guru dalam mengatur waktu dan mengakses jadwal pelajaran dengan mudah. Dengan fitur-fitur interaktifnya, pengguna dapat dengan cepat melihat jadwal pelajaran, guru yang mengajar, serta ruangan kelas yang digunakan untuk setiap mata pelajaran. Proyek ini memberikan solusi yang praktis untuk manajemen jadwal di lingkungan pendidikan."
  );
};
document.getElementById("tombol-about2").onclick = function () {
  Swal.fire(
    "Raport Nur Hidayat",
    "Proyek ini adalah sebuah aplikasi atau sistem yang dirancang untuk menghitung rata-rata nilai pada rapor dari semester 1 hingga semester 5. Aplikasi ini membantu siswa, guru, atau orang tua untuk dengan mudah melacak dan menghitung nilai rata-rata sepanjang masa belajar. Dengan memasukkan nilai dari setiap semester, proyek ini memberikan gambaran yang jelas tentang perkembangan akademis seiring waktu, yang dapat digunakan untuk evaluasi dan perencanaan lebih lanjut dalam pendidikan."
  );
};
document.getElementById("tombol-about3").onclick = function () {
  Swal.fire(
    "Laporan Biologi",
    "Laporan biologi ini adalah penelitian yang fokus pada pengaruh air terhadap pertumbuhan tanaman kangkung. Proyek ini melibatkan pengamatan dan eksperimen yang bertujuan untuk memahami dampak jumlah air, frekuensi penyiraman, dan kualitas air terhadap pertumbuhan dan perkembangan kangkung. Dengan mengumpulkan data dan analisis yang cermat, proyek ini dapat memberikan pemahaman yang lebih dalam tentang bagaimana air berperan dalam proses pertumbuhan tanaman, yang dapat memiliki implikasi penting dalam pertanian dan budidaya tanaman."
  );
};
document.getElementById("tombol-about4").onclick = function () {
  Swal.fire(
    "Rasionalisasi SNBP",
    "Project Rasioanalisasi SNBP adalah sebuah aplikasi yang dirancang untuk menyajikan informasi nilai rata-rata dari semester 1 hingga 5 dalam tampilan web yang interaktif. Di dalamnya, terdapat daftar nilai dari mata pelajaran umum dan pendukung program studi, memungkinkan pengguna untuk mengeksplorasi nilai-nilai tersebut secara terperinci. Selain itu, aplikasi ini menyediakan informasi tentang pilihan program studi (prodi) dan perguruan tinggi negeri (PTN) yang relevan pada Seleksi Nasional Masuk Perguruan Tinggi Negeri (SNMPTN) tahun 2024."
  );
};
document.getElementById("tombol-about5").onclick = function () {
  Swal.fire(
    "Rata-Rata Nilai",
    "Proyek HTML, CSS, dan JavaScript untuk menghitung rata-rata nilai semester I-V adalah aplikasi web yang memungkinkan pengguna untuk memasukkan nilai-nilai dari lima semester dan menghitung rata-rata dari nilai-nilai tersebut. Menggunakan HTML untuk struktur, CSS untuk tata letak dan penampilan, serta JavaScript untuk mengumpulkan nilai-nilai tersebut dan menghitung rata-ratanya, proyek ini memberikan pengguna kemudahan dalam mengetahui nilai rata-rata selama lima semester dengan cepat dan akurat."
  );
};
document.getElementById("tombol-about6").onclick = function () {
  Swal.fire(
    "Hasil Try Out SNBT",
    "Project ini berisi hasil try out SNBT 2024 pada bulan mei"
  );
};

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".animation-text", { delay: 50 });
sr.reveal(".animation-text2", { delay: 100 });
sr.reveal(".animation-text3", { delay: 150 });
sr.reveal(".animation-text4", { delay: 200 });
sr.reveal(".animation-button", { delay: 250 });
sr.reveal(".hero-img", { delay: 300 });
sr.reveal(".bg-project", { delay: 100 });
