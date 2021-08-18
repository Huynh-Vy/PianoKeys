//Keys and notes array store the piano keys
let keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key'];

let keysSharp = ['c-sharp-key','d-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];

let notes = [];
keys.forEach(key => notes.push(document.getElementById(key)));

let notesSharp = [];
keysSharp.forEach(keySharp => notesSharp.push(document.getElementById(keySharp)));

//change the color of piano keys when press mouse down
notes.forEach(function(note) {
    note.onmousedown = function() {
        note.style.backgroundColor = 'green';
    }
})

notesSharp.forEach(function(noteSharp) {
    noteSharp.onmousedown = function() {
        noteSharp.style.backgroundColor = 'green';
    }
})


//return piano keys to white color when release mouse
notes.forEach(function(note) {
    note.onmouseup = function() {
        note.style.backgroundColor = 'white';
    }
})

notesSharp.forEach(function(noteSharp) {
    noteSharp.onmouseup = function() {
        noteSharp.style.backgroundColor = '#141c3a';
    }
})

//variables that store buttons to process users through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

//variable that store the End lyrics element
let lastLyrics = document.getElementById('column-optional');

//hiding all the process button, except the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

//event on line 2 button
nextOne.onclick = function() {
    nextTwo.hidden = false; //reveal line 3 button
    nextOne.hidden = true; //hide line 2 button

    document.getElementById('letter-note-five').innerText = 'D';
    document.getElementById('letter-note-six').innerText = 'C';
}

//click on line 3 button
nextTwo.onclick = function() {
    nextThree.hidden = false;//reveal line 4 button
    nextTwo.hidden = true; //hide line 3 button

    document.getElementById('word-five').innerText = 'DEAR';
    document.getElementById('word-six').innerText = 'FRI-';

    lastLyrics.display = 'inline-block';

    document.getElementById('letter-note-three').innerText = 'G';
    document.getElementById('letter-note-four').innerText = 'E';
    document.getElementById('letter-note-five').innerText = 'C';
    document.getElementById('letter-note-six').innerText = 'B';
}

// click on line 4 button
nextThree.onclick = function() {
    startOver.hidden = false; //reveal reset button
    nextThree.hidden = true; //hide the line 4 button

    document.getElementById('word-one').innerText = 'HAP-';
    document.getElementById('word-two').innerText = 'PY';
    document.getElementById('word-three').innerText = 'BIRTH';
    document.getElementById('word-four').innerText = 'DAY';
    document.getElementById('word-five').innerText = 'TO';
    document.getElementById('word-six').innerText = 'YOU!';

    document.getElementById('letter-note-one').innerText = 'F';
    document.getElementById('letter-note-two').innerText = 'F';
    document.getElementById('letter-note-three').innerText = 'E';
    document.getElementById('letter-note-four').innerText = 'C';
    document.getElementById('letter-note-five').innerText = 'D';
    document.getElementById('letter-note-six').innerText = 'C';

    lastLyrics.display = 'none';
}

//click on reset button
startOver.onclick = function() {
    nextOne.hidden = false;
    startOver.hidden = true;

    document.getElementById('letter-note-one').innerText = 'G';
    document.getElementById('letter-note-two').innerText = 'G';
    document.getElementById('letter-note-three').innerText = 'A';
    document.getElementById('letter-note-four').innerText = 'G';
    document.getElementById('letter-note-five').innerText = 'C';
    document.getElementById('letter-note-six').innerText = 'B';
}

