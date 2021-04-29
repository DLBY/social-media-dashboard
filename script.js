// set theme name
 const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// toggle between dark & light
const toggleTheme = () => {
  if (localStorage.getItem('theme') === 'dark-theme') {
      setTheme('light-theme');
  } else {
      setTheme('dark-theme');
  }
}

// set theme on initial load
(() => {
  if (localStorage.getItem('theme') === 'dark-theme') {
      setTheme('dark-theme');
      document.getElementById('switch__slider').checked = false;
  } else {
      setTheme('light-theme');
    document.getElementById('switch__slider').checked == true;
  }
})();
