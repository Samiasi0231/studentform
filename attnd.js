

    // JavaScript code to handle form submission and display attendance records
    document.getElementById('attendanceForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const day = document.getElementById('day').value;
      const time = document.getElementById('time').value;
      const tableBody = document.getElementById('attendanceTable');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${day}</td>
        <td>${time}</td>
      `;
      tableBody.appendChild(newRow);
      // You can send the attendance data to the server for further processing here
      // For simplicity, this example only adds the data to the table without saving it
    });
  

