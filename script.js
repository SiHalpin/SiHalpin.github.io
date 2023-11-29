function generateSong() {
    var songContainer = document.getElementById("songContainer");
    songContainer.innerText = "";

    for (var i = 99; i >= 1; i--) {
        var currentBottles = i;
        var nextBottles = i - 1;
        var verse = currentBottles + " bottles of beer on the wall, " + currentBottles + " bottles of beer.\n";
        verse += "Take one down, pass it around, " + nextBottles + " bottles of beer on the wall.\n\n";
        songContainer.innerText += verse;
    }

    songContainer.innerText += "No more bottles of beer on the wall, no more bottles of beer.\n"
    songContainer.innerText += "Go to the store and buy some more, 99 bottles of beer on the wall.";
}


function enterResults() {
    var subjectCount = document.getElementById("subjectCount").value;
    var results = [];
    var grade = '';

    for (var i = 0; i < subjectCount; i++) {
        var result = prompt("Enter the result for subject " + (i + 1));
        results.push(Number(result));
    }

    var sum = 0;
    for (var i = 0; i < results.length; i++) {
        sum += results[i];
    }

    var average = sum / results.length;

    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "<h3>Results</h3>";
    for (var i = 0; i < results.length; i++) {
        grade = calculateGrade(results[i]);
        resultContainer.innerHTML += "Subject " + (i + 1) + ": " + results[i] + " (Grade: " + grade + ")<br>";
    }

    resultContainer.innerHTML += "<p>Overall Average: " + average.toFixed(2) + "</p>";
}

function calculateGrade(result) {
    if (result >= 85) {
        return "A";
    } else if (result >= 70) {
        return "B";
    } else if (result >= 55) {
        return "C";
    } else if (result >= 40) {
        return "D";
    } else {
        return "F";
    }
}
