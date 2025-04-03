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

/**
 * @darktheme
 * Toggle the theme
 */

// Select the button and its icon
const toggleButton = document.getElementById("dark-light");
const icon = toggleButton.querySelector("i");

// Check localStorage for the saved theme and apply it on page load
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("bx-sun", "bx-moon"); // Set to moon icon on load if dark mode
}

// Add a click event listener to the button
toggleButton.addEventListener("click", () => {
  // Toggle the 'dark' class on the body element
  document.body.classList.toggle("dark");

  // Toggle the icon
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("bx-sun", "bx-moon"); // Sun to moon
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("bx-moon", "bx-sun"); // Moon to sun
    localStorage.setItem("theme", "light");
  }
});
