function getUrlVars() {
  const vars = {};
  const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  window.location.assign('/home');
}

const params = getUrlVars();
let token = localStorage.getItem('token');

if (params.token && params.username) {
  localStorage.setItem('token', params.token);
  token = params.token; // Pour la condition en bas
  localStorage.setItem('username', params.username);
  const login = document.getElementById('login');
  login.remove();
  const register = document.getElementById('register');
  register.remove();
} else if (token == null) {
  const logoutBtn = document.getElementById('logout');
  logoutBtn.remove();
}

if (token !== null) {
  const login = document.getElementById('login');
  login.remove();
  const register = document.getElementById('register');
  register.remove();
}

console.log('script');
