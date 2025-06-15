const userRadio = document.getElementById('userRole');
const adminRadio = document.getElementById('adminRole');
const nameField = document.getElementById('nameField');
const orgField = document.getElementById('orgField');
const counterField = document.getElementById('counterField');

// Toggle fields based on role
function updateFormFields() {
  if (adminRadio.checked) {
    nameField.classList.add('d-none');
    orgField.classList.remove('d-none');
    counterField.classList.remove('d-none');
  } else {
    nameField.classList.remove('d-none');
    orgField.classList.add('d-none');
    counterField.classList.add('d-none');
  }
}

userRadio.addEventListener('change', updateFormFields);
adminRadio.addEventListener('change', updateFormFields);
window.addEventListener('load', updateFormFields);

// Handle submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const role = document.querySelector('input[name="role"]:checked').value;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  let formData = {
    role,
    email,
    password
  };

  if (role === 'user') {
    const name = document.getElementById('name').value.trim();
    if (!name) return alert("Please enter your name.");
    formData.name = name;
  } else if (role === 'admin') {
    const orgName = document.getElementById('orgName').value.trim();
    const counterNumber = document.getElementById('counterNumber').value.trim();
    if (!orgName || !counterNumber) return alert("Please fill all admin fields.");
    formData.orgName = orgName;
    formData.counterNumber = counterNumber;
  }

  console.log("Signup Data:", formData);

  // TODO: Send data to backend API
  alert(`${role === 'admin' ? 'Admin' : 'User'} signed up successfully!`);
  window.location.href = role === 'admin' ? 'admin_dashboard.html' : 'user_dashboard.html';
});
