document
  .getElementById("accountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
      document.getElementById("message").textContent = "Login successful!";
      document.getElementById("message").style.color = 'green';
      // Perform any other actions you want after successful login
    } else {
      document.getElementById("message").textContent =
        "Invalid username or password.";
    }
  });
