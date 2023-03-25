const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login input form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard
      document.location.replace("/dashboard");
    } else {
      let result = await response.json();
      alert(result.message);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

const showPasswordCheckbox = document.querySelector("#show-password");
const passwordInput = document.querySelector("#password-login");

showPasswordCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
