document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;

    const tableBody = document.getElementById('workout-table-body'); //This ID targets the correct table body.

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${exercise}</td>
        <td>${sets}</td>
        <td>${reps}</td>
        <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
    });

    document.getElementById('workout-form').reset();
});