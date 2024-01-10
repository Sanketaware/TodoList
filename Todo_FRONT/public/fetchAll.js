const accessToken = sessionStorage.getItem("accessToken");
if (accessToken) {
  fetch("http://localhost:5248/api/ToDoItem", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse the JSON response
      }
    })
    .then((data) => {
      const tasklist = document.getElementById("tasks");
      let innerString = "";
      // Loop through the task data and add rows to the table
      data.forEach((task) => {
        const formattedDate = new Date(task.date).toLocaleDateString();

        innerString += `
            <li class="adobe-product">
              <div class="products">
                <span>${task.title}</span>
                <span class="date">${formattedDate}</span>
              </div>                  
            </li>
          `;
      });
      tasklist.innerHTML = innerString;
    })
    .catch((error) => {
      console.error("Error fetching task data:", error);
    });
} else {
  console.log("Cannot Fetch");
}
