const darkModebutton = document.querySelector("#dark_theme");

function changeDarkMode() {
  let sidebar_dark = document.getElementById("sideBar");
  sidebar_dark.classList.toggle("dark-mode-textbox");

  let background_dark = document.body;
  background_dark.classList.toggle("dark-mode");

  let textbox_dark = document.getElementById("TextBox");
  textbox_dark.classList.toggle("dark-mode-textbox");
  
  let darkNewNotebutton = document.getElementById("New_note");
  darkNewNotebutton.classList.toggle("dark-mode-green");

  let darkSavebutton = document.getElementById("save_button");
  darkSavebutton.classList.toggle("dark-mode-green");

  let darkCancelbutton = document.getElementById("cancel");
  darkCancelbutton.classList.toggle("dark-mode-red");
}

darkModebutton.addEventListener("click", changeDarkMode);

function changeTextDarkMode() {
  const initialtext = "Light Theme";

  if (darkModebutton.textContent === "Light Theme") {
    darkModebutton.textContent = "Dark Theme";
  } else {
    darkModebutton.textContent = initialtext;
  }
}

darkModebutton.addEventListener("click", changeTextDarkMode);

const cancelPagebutton = document.querySelector("#cancel");

function cancelChange() {
  document.getElementById("cancelButton").style.visibility = "hidden";
}

cancelPagebutton.addEventListener("click", cancelChange);

const newPagebutton = document.querySelector("#New_note");

function reverseCancelChange() {
  document.getElementById("cancelButton").style.visibility = "visible";

  document.getElementById("TextBox").value = "";
}

newPagebutton.addEventListener("click", reverseCancelChange);

let notesArray = [
  { title: "note one", body: "this is my first note" },
  { title: "note two", body: "this is my second note" },
];

