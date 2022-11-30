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

  
    document.getElementById("TextBox").value = "";
  
    
}

newPagebutton.addEventListener("click", reverseCancelChange);

let notesArray = {
  title: "note one",
  body: "this is my first note",
};

const saveButton = document.querySelector(".save_button");

function textboxChange() {
  user_var = ""

  alert("Print the title of the Note you want to save");


 
 
  document.body.appendChild(user_var);

//   Add a new JS object to the notesArray with the provided title and the text in the text area as the body
// Add a list item to the sidebar with the title of the JS object you just added to the array

}

saveButton.addEventListener("click", textboxChange)
