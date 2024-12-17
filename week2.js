// De enige gebruiker met toegangsgegevens
const validUser = {
  username: "admin",
  password: "user"
};

// Functie om login af te handelen
function handleLogin(event) {
  event.preventDefault();

  // Haal gebruikersinvoer op
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Controleer of de invoer overeenkomt met de enige gebruiker
  if (username === validUser.username && password === validUser.password) {
      // Succesvolle login
      window.location.href = "dasboard.html";
  } else {
      // Foutmelding
      const errorElement = document.getElementById("error");
      errorElement.textContent = "Onjuiste gebruikersnaam of wachtwoord.";
  }
}
