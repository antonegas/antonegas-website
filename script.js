var rootElement = document.documentElement;

function toggleDarkmode () {
  rootElement.classList.toggle("darkmode")
};

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggleDarkmode();
};
