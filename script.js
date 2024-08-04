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


const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".hero-img", { delay: 50 });
sr.reveal(".animation-text1", { delay: 100 });
sr.reveal(".animation-text2", { delay: 150 });
sr.reveal(".animation-button", { delay: 200 });
sr.reveal(".bg-project", { delay: 100 });
