const students = [
  { name: "Ana", scores: [85, 90, 88], present: true },
  { name: "Ben", scores: [70, 75, 72], present: false },
  { name: "Emi", scores: [95, 92, 94], present: true },
  { name: "Dan", scores: [60, 65, 70], present: true },
  { name: "Ella", scores: [50, 55, 60], present: false }
];

// Function to calculate average
function calculateAverage(scores) {
  const total = scores.reduce((a, b) => a + b, 0);
  return (total / scores.length).toFixed(2);
}

// Function to get remarks
function getRemarks(average) {
  return average >= 75 ? "Passed" : "Failed";
}

// Function to render table rows
function renderTable(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // clear table
  data.forEach(student => {
    const avg = calculateAverage(student.scores);
    const remarks = getRemarks(avg);
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.scores[0]}</td>
        <td>${student.scores[1]}</td>
        <td>${student.scores[2]}</td>
        <td>${avg}</td>
        <td>${remarks}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

// Search function
function searchStudent() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = students.filter(s => s.name.toLowerCase().includes(query));
  renderTable(filtered);
}

// Filter function
function filterStudents(type) {
  let filtered = [];
  if (type === "present") filtered = students.filter(s => s.present);
  else if (type === "absent") filtered = students.filter(s => !s.present);
  else if (type === "passed") filtered = students.filter(s => getRemarks(calculateAverage(s.scores)) === "Passed");
  else if (type === "failed") filtered = students.filter(s => getRemarks(calculateAverage(s.scores)) === "Failed");
  renderTable(filtered);
}

// Show all students
function showAllStudents() {
  renderTable(students);
}

// **Render table on page load**
window.onload = function() {
  renderTable(students);
};
