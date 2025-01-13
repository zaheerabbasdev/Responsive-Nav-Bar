let isMobileMenuOpen = false;

function toggleMobileMenu() {
  const nav_List = document.getElementById("nav-List");
  const hamburger = document.getElementById("hamburger");

  // Check if elements exist to avoid errors
  if (!nav_List || !hamburger) {
    console.error("Navigation list or hamburger element not found!");
    return;
  }

  isMobileMenuOpen = !isMobileMenuOpen;

  if (isMobileMenuOpen) {
    nav_List.classList.add("open");
    hamburger.classList.add("active");
  } else {
    nav_List.classList.remove("open");
    hamburger.classList.remove("active");
  }
}
