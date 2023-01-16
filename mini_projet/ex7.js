// Exercice 7 :
function computeNotes(notes) {
    let div = document.createElement("div");
    let sum = 0;
    for (let i = 0; i < notes.length; i++) {
        sum += notes[i];
    }
    div.innerHTML = sum / notes.length;
    return div;
}

let notes = [10, 13, 13, 12, 15, 12, 11, 16, 14];
const note = computeNotes(notes);

const container = document.getElementById("note-container");
document.body.appendChild(note);