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
    if (result >= 90) {
        return "A";
    } else if (result >= 80) {
        return "B";
    } else if (result >= 70) {
        return "C";
    } else if (result >= 60) {
        return "D";
    } else {
        return "F";
    }
}
