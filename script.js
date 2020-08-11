var rootElement = document.documentElement;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  rootElement.classList.add("darkmode")
};

var darkmodeToggle = document.querySelector(".darkmode-toggle");
