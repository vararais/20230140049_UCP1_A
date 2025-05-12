// promo Popup untuk semua page
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("promoPopup");
    const closeBtn = document.querySelector(".close");
  
    setTimeout(() => {
      popup.style.display = "block";
    }, 3000);
  
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // tutup popup ketika klik
    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  
  //  page kontak
  if (document.getElementById("registrationForm")) {
    document
      .getElementById("registrationForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Pesan anda terkirim!");
        this.reset();
      });
  }