
export function setupNavbar(){
const burg = document.getElementById("burger");
const mainMenu = document.getElementById("menu");

burg.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
}



export function imageView(){
const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImg");

            function openModal(src) {
            modal.classList.remove("hidden");
            modalImg.src = src;
            }

            modal.addEventListener("click", () => {
            modal.classList.add("hidden");
            });
}

