const darkModebutton = document.querySelector(".dark_theme");

function changeDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

darkModebutton.addEventListener("click", changeDarkMode);

function changeTextDarkMode() {
 
  const initialtext = "Dark Theme"
    
  if(darkModebutton.textContent === "Dark Theme") {
    darkModebutton.textContent = "Light Theme";
  }

  else {
    darkModebutton.textContent = initialtext;
  }
}

darkModebutton.addEventListener("click", changeTextDarkMode);
