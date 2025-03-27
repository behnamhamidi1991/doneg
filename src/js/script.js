const dropdownBtn = document.getElementById("dropdown-btn");
const megaMenu = document.querySelector(".mega-menu");
const dropdownIcon = dropdownBtn.querySelector("i"); // Get the icon inside the button

// Open mega menu and rotate icon on hover
dropdownBtn.addEventListener("mouseenter", () => {
  megaMenu.classList.add("open");
  dropdownIcon.classList.add("rotated"); // Rotate the icon
});

megaMenu.addEventListener("mouseenter", () => {
  megaMenu.classList.add("open");
  dropdownIcon.classList.add("rotated"); // Keep icon rotated
});

// Close mega menu and reset icon rotation on mouse leave
dropdownBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!megaMenu.matches(":hover")) {
      megaMenu.classList.remove("open");
      dropdownIcon.classList.remove("rotated"); // Reset icon rotation
    }
  }, 200); // Delay for hover consistency
});

megaMenu.addEventListener("mouseleave", () => {
  megaMenu.classList.remove("open");
  dropdownIcon.classList.remove("rotated"); // Reset icon rotation
});

// Close mega menu and reset icon when clicking outside
document.addEventListener("click", (event) => {
  if (!megaMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
    megaMenu.classList.remove("open");
    dropdownIcon.classList.remove("rotated"); // Reset icon rotation
  }
});
