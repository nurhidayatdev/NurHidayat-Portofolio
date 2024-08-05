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
