var user = sessionStorage.getItem("user");
document.getElementById("username").innerText = user;

function logout() {
  sessionStorage.clear();
  location.reload();
}
// Function to add or remove 'is-active' class on menu-link click
document.querySelectorAll(".menu-link").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelectorAll(".menu-link").forEach(function (item) {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
  });
});

// Function to add or remove 'is-active' class on main-header-link click
document.querySelectorAll(".main-header-link").forEach(function (headerLink) {
  headerLink.addEventListener("click", function () {
    document.querySelectorAll(".main-header-link").forEach(function (item) {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
  });
});

// Function to handle dropdown click
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdowns.forEach(function (item) {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
  });
});

// Function to handle search bar focus and blur
document
  .querySelector(".search-bar input")
  .addEventListener("focus", function () {
    document.querySelector(".header").classList.add("wide");
  });
document
  .querySelector(".search-bar input")
  .addEventListener("blur", function () {
    document.querySelector(".header").classList.remove("wide");
  });

// Function to handle overlay on dropdown click
document.querySelectorAll(".dropdown").forEach(function (dropdown) {
  dropdown.addEventListener("click", function (e) {
    document.querySelector(".content-wrapper").classList.add("overlay");
    e.stopPropagation();
  });
});

// Function to handle status-button click to add overlay-app class
document
  .querySelectorAll(".status-button:not(.open)")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelector(".overlay-app").classList.add("is-active");
    });
  });

// Function to handle pop-up close button click
document.querySelectorAll(".pop-up .close").forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    document.querySelector(".overlay-app").classList.remove("is-active");
    document.querySelector(".pop-up").classList.remove("visible");
  });
});

// Function to handle status-button click to add visible class to pop-up
document
  .querySelectorAll(".status-button:not(.open)")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelector(".pop-up").classList.add("visible");
    });
  });

// Function to handle pop-up close button click
document.querySelectorAll(".pop-up .close").forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    document.querySelector(".pop-up").classList.remove("visible");
  });
});

// Function to toggle light mode on button click
const toggleButton = document.querySelector(".dark-light");
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});
