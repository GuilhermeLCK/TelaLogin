var login = document.getElementById("login");
var password = document.getElementById("password");

function start() {
  if (login.value.length == 0 || password.value.length == 0) {
    alert("[ERRO]Digite todos os dados!");
  } else {
    window.location.href = "https://guilhermelck.github.io/MeuPortf-lio/";
  }
}
