//~~>Validation login
let dataUser = JSON.parse(localStorage.getItem("UserLog"));
dataUser !== "1" ? (window.location.href = "./../index.html") : false;