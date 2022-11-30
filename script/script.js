const darkModebutton = document.querySelector(".dark_theme");

function changeDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

darkModebutton.addEventListener("click", changeDarkMode);

function changeTextDarkMode() {
  const initialtext = "Dark Theme";

  if (darkModebutton.textContent === "Dark Theme") {
    darkModebutton.textContent = "Light Theme";
  } else {
    darkModebutton.textContent = initialtext;
  }
}

darkModebutton.addEventListener("click", changeTextDarkMode);

const cancelPagebutton = document.querySelector(".cancel");

function cancelChange() {
  
  document.getElementById("cancelButton").style.visibility = "hidden";
}

cancelPagebutton.addEventListener("click", cancelChange);

const newPagebutton = document.querySelector(".New_note");

function reverseCancelChange() {
  
  document.getElementById("cancelButton").style.visibility = "visible";
}

newPagebutton.addEventListener("click", reverseCancelChange);