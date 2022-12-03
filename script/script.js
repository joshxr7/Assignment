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

const saveButton = document.querySelector("#save_button");

function textBoxInfo() {
  const user_var = prompt("Please enter the name of the note");

  const text = document.querySelector("#TextBox");

  let note = {
    title: user_var,
    body: text.value,
  };
  user_var.value = "";
  text.value = "";
  textboxChange(note);

  notesArray.push(note);
  console.log(notesArray);
}

function textboxChange(note) {
  const text_area = document.querySelector(".sideList");
  const list = document.createElement("li");
  list.textContent = `${note.title}`;
  text_area.appendChild(list);
}

saveButton.addEventListener("click", textBoxInfo);

