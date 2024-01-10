document.addEventListener("DOMContentLoaded", function () {
  const Profile = document.getElementById("ProfilePIC");

  Profile.addEventListener("click", function () {
    Swal.fire({
      title: "Sign In",
      html: `
            <form id="TaskForm">
              <input type="text" placeholder="username" id="userName" class="swal2-input">
              <input type="text" placeholder="password" id="password" class="swal2-input">
            </form>
          `,
      showCancelButton: true,
      confirmButtonText: "SignIn",
      customClass: {
        popup: "my-custom-popup-class",
      },
      preConfirm: () => {
        const UserName = document.getElementById("userName").value;
        const Password = document.getElementById("password").value;

        return fetch("http://localhost:5248/api/Authentication/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserName,
            isLoggedIn: true,
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
            console.log("Signed in:", data);
            Swal.fire(
              "Good to Go,",
              "Check your daily tasks in today bucket.",
              "success"
            );
            sessionStorage.setItem("user", UserName);
            sessionStorage.setItem("accessToken", data.token);
          });
        //   .catch((error) => {
        //     // Handle errors from the API or fetch request
        //     console.error("Error Logging In:", error);
        //     Swal.fire("Error", "There was an error while Login ", "error");
        //   });
      },
    });
  });
});
