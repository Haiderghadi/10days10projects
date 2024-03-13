function createNote() {
  var noteText = document.getElementById("noteInput").value;
  if (noteText) {
    var noteEl = document.createElement("pre");
    noteEl.textContent = noteText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.onclick = function () {
      noteEl.remove();
    };

    noteEl.appendChild(deleteButton);

    document.getElementById("noteContainer").appendChild(noteEl);
    document.getElementById("noteInput").value = "";
  }
}
