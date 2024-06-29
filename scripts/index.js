$(document).ready(function () {
  $("#loader").fadeOut(1000);
  AOS.init();
  document.querySelectorAll(".nav-link").forEach((e) => {
    const urlLink = window.location.pathname;
    e.classList.remove("active");
    if (`/${e.getAttribute("href")}` == `${urlLink}`) {
      e.classList.add("active");
    }
  });
});
