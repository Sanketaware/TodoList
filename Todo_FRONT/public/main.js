document.addEventListener("DOMContentLoaded", function () {
  const accessToken = sessionStorage.getItem("accessToken");
  const today = new Date();
  // const formattedDate = today.toISOString().split("T")[0]; // Get the date in "YYYY-MM-DD" format
  if (accessToken) {
    const AddBookBTN = document.getElementById("AddTaskBTN");

    AddBookBTN.addEventListener("click", function () {
      Swal.fire({
        title: "Add Task",
        html: `
        <form id="TaskForm">
      <input type="text" placeholder="Title" id="title" class="swal2-input">
     
      <input type="date" id="date" class="swal2-input" value="${
        new Date().toISOString().split("T")[0]
      }">
    </form>
        `,
        showCancelButton: true,
        confirmButtonText: "Add",
        focusConfirm: false,
        customClass: {
          // Apply your custom CSS classes here
          popup: "my-custom-popup-class",
        },
        preConfirm: () => {
          const title = document.getElementById("title").value;
          const date = document.getElementById("date").value;
          const owner = sessionStorage.getItem("user");
          return fetch("http://localhost:5248/api/ToDoItem", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`, // Include the access token in the request headers
            },
            body: JSON.stringify({
              title,
              isComplete: false,
              date: date,
              owner,
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok.");
              }
              return response.json();
            })
            .then((data) => {
              console.log("task added:", data);
              Swal.fire(
                "Task Added",
                "Reminder will be generated for the task.",
                "success"
              );
            })
            .catch((error) => {
              // Handle errors from the API or fetch request
              console.error("Error Creating task:", error);
              Swal.fire(
                "Error",
                "There was an error creating the task.",
                "error"
              );
            });
        },
      });
    });
  }
});
