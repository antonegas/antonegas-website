var rootElement = document.documentElement;

function toggleDarkmode () {
  rootElement.classList.add("darkmode")
};

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggleDarkmode()
};
