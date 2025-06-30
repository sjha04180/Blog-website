function toggleTheme() {
  const thememain = document.getElementById("stylesheetMain");
 

  if (thememain.getAttribute("href") === "/css/style.css") {
    thememain.setAttribute("href", "/css/style2.css");
   
  } else if (thememain.getAttribute("href") === "/css/style2.css") {
    thememain.setAttribute("href", "/css/style.css");
    
  }
}

//For Login password toggle
const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", type === "password" ? "text" : "password");

  // Optionally change the icon/text
  togglePassword.textContent = type === "password" ? "🙈" : "👁️";
});

//For Login password toggle
const passwordInput2 = document.getElementById("passwordInput2");
const togglePassword2 = document.getElementById("togglePassword2");

togglePassword2.addEventListener("click", () => {
  const type = passwordInput2.getAttribute("type");
  passwordInput2.setAttribute("type", type === "password" ? "text" : "password");

  // Optionally change the icon/text
  togglePassword2.textContent = type === "password" ? "🙈" : "👁️";
});
