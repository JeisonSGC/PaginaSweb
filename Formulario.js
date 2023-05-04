
const form = document.getElementById("My-form");
const nameInput = document.getElementById("name");
const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");


form.addEventListener("submit", (event) => {
  
  event.preventDefault();
  
  if (nameInput.value === "" || userInput.value === "" || passwordInput.value === "") {
    
    if (nameInput.value === "") {
      nameInput.classList.add("form_error");
    }
    if (userInput.value === "") {
      userInput.classList.add("form_error");
    }
    if (passwordInput.value === "") {
      passwordInput.classList.add("form_error");
    }
    
    alert("Por favor complete todos los campos.");
  } else {
    
    form.submit();
    window.location.href = "PaginaVideojuego.html";

  }
});


nameInput.addEventListener("input", () => {
  
  nameInput.classList.remove("form_error");
});
userInput.addEventListener("input", () => {
  
  userInput.classList.remove("form_error");
});
passwordInput.addEventListener("input", () => {
  
  passwordInput.classList.remove("form_error");
});
