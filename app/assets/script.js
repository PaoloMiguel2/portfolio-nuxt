
export function setupNavbar(){
const burg = document.getElementById("burger");
const mainMenu = document.getElementById("menu");

burg.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
}



export function imageView() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  document.querySelectorAll(".image-certifications").forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.remove("hidden");
    });
  });

  modal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

