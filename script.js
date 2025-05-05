// Smooth Scroll Function
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Modal Open/Close Logic
function toggleModal(modalId, action) {
  const modal = document.getElementById(modalId);
  modal.style.display = action === 'open' ? 'block' : 'none';
}

document.getElementById("openSignup").addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal("signupModal", "open");
});

document.getElementById("closeSignup").addEventListener("click", () => {
  toggleModal("signupModal", "close");
});

document.getElementById("closeLogin").addEventListener("click", () => {
  toggleModal("authModal", "close");
});

// Close modal if user clicks outside
window.addEventListener("click", (event) => {
  const signupModal = document.getElementById("signupModal");
  const authModal = document.getElementById("authModal");

  if (event.target === signupModal) {
      toggleModal("signupModal", "close");
  }
  if (event.target === authModal) {
      toggleModal("authModal", "close");
  }
});

// Switch between Login and Signup forms
document.getElementById("switch-to-signup").addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal("authModal", "close");
  toggleModal("signupModal", "open");
});

// Simulate Sign Up ➜ Redirect to Login
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("signup-success").style.display = "block";

  setTimeout(() => {
      toggleModal("signupModal", "close");
      toggleModal("authModal", "open");
      document.getElementById("signup-success").style.display = "none";
  }, 2000); // Wait 2 seconds before redirecting
});

// Login Form Submission
document.getElementById("auth-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
  } else {
      alert("Invalid credentials.");
  }
});

// Modal Open (For Sign In)
document.getElementById("openSignin").addEventListener("click", () => {
  toggleModal("authModal", "open");
});

// Update Navigation Based on Login Status
document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const authLinks = document.querySelectorAll(".auth-link");
  const logoutBtn = document.getElementById("logoutBtn");

  function updateNav() {
      if (isLoggedIn) {
          authLinks.forEach(link => link.style.display = "none");
          logoutBtn.style.display = "inline";
      } else {
          authLinks.forEach(link => link.style.display = "inline");
          logoutBtn.style.display = "none";
      }
  }

  updateNav();

  logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      location.reload(); // refresh the page to reset UI
  });
});

// Initial Display Control Based on Login State
document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Show/Hide Sign In / Sign Up / Logout buttons based on login state
  document.getElementById('openSignup').style.display = isLoggedIn ? 'none' : 'inline';
  document.getElementById('openSignin').style.display = isLoggedIn ? 'none' : 'inline';
  document.getElementById('logoutBtn').style.display = isLoggedIn ? 'inline' : 'none';
});
