document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const role = document.querySelector('input[name="role"]:checked').value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const loginData = {
    email,
    password,
    role
  };

  console.log("Login Attempt:", loginData);

  // TODO: Send to backend for verification
  // For now simulate success:
  alert(`Logged in as ${role.charAt(0).toUpperCase() + role.slice(1)}!`);

  if (role === 'admin') {
    window.location.href = 'admin_dashboard.html';
  } else {
    window.location.href = 'user_dashboard.html';
  }
});
