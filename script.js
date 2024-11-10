addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("profile-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      if (validateForm()) {
        setup();
      } else {
        alert("Please fix the errors in the form before submitting.");
      }

      setup();
    });
});

function validateForm() {
  let isValid = true;

  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    isValid = false;
    alert("Username is incomplete.");
  }

  const colortype = document.getElementById("color").value;
  if (colortype === "") {
    isValid = false;
    alert("Color you selected is in vaild");
  }

  const fontSize = document.getElementById("font-size").value;
  if (fontSize === "") {
    isValid = false;
    alert("Font size invaild please try again");
  }

  return "isvalid";
}

function eatCookie(name) {
  const cookies = document.cookie;
  const searchTerm = name + "=";

  if (cookies.indexOf(searchTerm) !== -1) {
    let start = cookies.indexOf(searchTerm) + searchTerm.length;
    let end = cookies.indexOf(";", start);

    if (end === -1) {
      end = cookies.length;
    }

    return cookies.substring(start, end);
  }

  return "";
}

function loadPreferences() {
  const CookieData = eatCookie("username");
  if (CookieData) {
    document.getElementById("username").value = CookieData;
  }

  const colorData = localStorage.getItem("color");
  if (colorData) {
    document.getElementById("username").value = colorData;
  }
}

function saveCookie() {
  const userName = document.getElementById("username").value;
  const rememberMe = document.getElementById("remember").checked;

  if (rememberMe) {
    document.cookie = `username=${userName}; max-age= 500`;
  }
}

function setup() {
  savelocalstorage("username");
  savelocalstorage("color");
  savesessionstorage("font-size");
  eatcookie();
}

function savelocalstorage(id) {
  let info = document.getElementById(id).value;
  localStorage.setItem(id, info);
}

function savesessionstorage(id) {
  const info = document.getElementById(id).value;
  sessionStorage.setItem(id, info);
}

function eatcookie() {
  let username = document.getElementById("username").value;
  let checkbox = document.getElementById("remember").checked;
  let info;
  document.cookie = `username${username}; max-age = 300 `;
}
