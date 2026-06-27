function socialLogin(provider) {
  alert("Login with " + provider);
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let successMsg = document.getElementById("successMsg");

  emailError.innerText = "";
  passwordError.innerText = "";

  let valid = true;

  if (!email) {
    emailError.innerText = "*Email is required";
    valid = false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.innerText = "*Invalid email format";
    valid = false;
  }

  if (!password) {
    passwordError.innerText = "*Password is required";
    valid = false;
  }

  if (password && password.length < 6) {
    passwordError.innerText = " Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    successMsg.innerText = "Login Successful";
    successMsg.classList.add("show");
    this.reset();
  }
  setTimeout(() => {
    successMsg.innerText = "";
    successMsg.classList.remove("show");
  }, 1000);
});
