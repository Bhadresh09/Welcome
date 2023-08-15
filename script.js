const addButton = document.getElementById("addButton");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

addButton.addEventListener("click", addNote);

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const noteItem = document.createElement("li");
    noteItem.textContent = noteText;
    notesList.appendChild(noteItem);
    noteInput.value = "";
  }
}
