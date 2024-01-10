document.addEventListener("DOMContentLoaded", function () {
  const RegisterBTN = document.getElementById("RegisterBTN");

  RegisterBTN.addEventListener("click", function () {
    Swal.fire({
      title: "Sign Up",
      html: `
              <form id="TaskForm">
              <input type="text" placeholder="username" id="username" class="swal2-input">
              <input type="text" placeholder="email" id="email" class="swal2-input">
              <input type="text" placeholder="password" id="password" class="swal2-input">
              </form>
            `,
      showCancelButton: true,
      confirmButtonText: "SignUp",
      customClass: {
        popup: "my-custom-popup-class",
      },
      preConfirm: () => {
        const UserName = document.getElementById("username").value;
        const Email = document.getElementById("email").value;
        const Password = document.getElementById("password").value;

        return fetch("http://localhost:5248/api/Authentication/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserName,
            Email,
            Password,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Signed Up:", data);
            Swal.fire(
              "Registration Confirmed,",
              "Log-in to access your Event planner",
              "success"
            );
          });
        // .catch((error) => {
        //   // Handle errors from the API or fetch request
        //   console.error("Error Registering :", error);
        //   Swal.fire("Error", "error");
        // });
      },
    });
  });
});
