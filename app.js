// app.js

// Function to log exercises
function logExercise(exercise) {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    exercises.push(exercise);
    localStorage.setItem('exercises', JSON.stringify(exercises));
    displayHistory();
}

// Function to display workout history
function displayHistory() {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
    exercises.forEach(ex => {
        const div = document.createElement('div');
        div.innerText = `${ex.date}: ${ex.name} (${ex.reps} reps)`;
        historyDiv.appendChild(div);
    });
}

// Function to calculate personal records
function calculatePersonalRecords() {
    const exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    const records = {};
    exercises.forEach(ex => {
        if(!records[ex.name] || records[ex.name] < ex.reps) {
            records[ex.name] = ex.reps;
        }
    });
    return records;
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listeners for buttons
document.getElementById('logButton').addEventListener('click', function() {
    const exercise = {
        name: document.getElementById('exerciseName').value,
        reps: parseInt(document.getElementById('exerciseReps').value),
        date: new Date().toISOString()
    };
    logExercise(exercise);
});

document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);

displayHistory();
