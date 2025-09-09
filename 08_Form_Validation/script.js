function getPasswordErrors(password) {
  let errors = [];
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;

  if (password.length < 8) {
    errors.push("at least 8 characters");
  }

  for (let i = 0; i < password.length; i++) {
    const ch = password.charAt(i);
    if (ch >= "A" && ch <= "Z") hasUpper = true;
    else if (ch >= "a" && ch <= "z") hasLower = true;
    else if (ch >= "0" && ch <= "9") hasNumber = true;
    else hasSpecial = true;
  }

  if (!hasUpper) errors.push("an uppercase letter");
  if (!hasLower) errors.push("a lowercase letter");
  if (!hasNumber) errors.push("a number");
  if (!hasSpecial) errors.push("a special character");

  return errors;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  if (name.length < 3) {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  if (
    email.indexOf("@") === -1 ||
    email.indexOf(".") === -1 ||
    email.startsWith("@") ||
    email.endsWith("@") ||
    email.endsWith(".")
  ) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  const passwordErrors = getPasswordErrors(password);
  if (passwordErrors.length > 0) {
    document.getElementById("passwordError").style.display = "block";
    document.getElementById("passwordError").innerText =
      "Password must contain: " + passwordErrors.join(", ");
    isValid = false;
  } else {
    document.getElementById("passwordError").style.display = "none";
  }

  if (password !== confirmPassword || confirmPassword === "") {
    document.getElementById("confirmError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("confirmError").style.display = "none";
  }

  if (isValid) {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("successMessage").style.display = "flex";
  }
});
