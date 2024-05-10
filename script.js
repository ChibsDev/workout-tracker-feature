
const getWorkoutsButton = document.getElementById('getWorkouts');
const workoutContainer = document.getElementById('workout-container');

getWorkoutsButton.addEventListener('click', async () => {
    const response = await fetch('./db.js');
const responseClone = response.clone(); 

console.log(await responseClone.text()); 

const workouts = await response.json(); 


    // Display workout data 
    workoutContainer.innerHTML = `<h2>Workouts:</h2>`;
    for (const workout of workouts) {
        workoutContainer.innerHTML += `
            <p>Date: ${workout.date}</p>
            <ul>
                ${workout.exercises.map(exercise => `
                    <li><b>${exercise.name}</b>: ${exercise.sets.map(set => `${set.reps} reps`).join(', ')}</li>
                `).join('')}
            </ul>
        `;
    }
})

// getWorkoutsButton.addEventListener('click', async () => {
//     const response = await fetch('./db.js');
//     const workouts = await response.json();
  
//     // Loop through workouts and display them (example)
//     workouts.forEach(workout => {
//       console.log(`Workout Date: ${workout.date}`);
//       workout.exercises.forEach(exercise => {
//         console.log(`  - Exercise: ${exercise.name}`);
//         console.log(`    - Muscle Groups: ${exercise.muscleGroups.join(', ')}`);
//         // ... and so on to display sets and reps
//       });
//     });
//   });
  