// Smooth Scroll Function
function scrollToSection(id) {
    const section = document.getElementById(id);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact Form Submit (optional extra feature)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for contacting us! We will reach out soon.');
    form.reset();
});

// Modal Elements
const modal = document.getElementById("authModal");
const closeBtn = document.querySelector(".close");
const bookNowBtns = document.querySelectorAll(".book-now"); // all Book Now buttons
const switchToSignup = document.getElementById("switch-to-signup");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const toggleForm = document.getElementById("toggle-form");

// Open Modal on Book Now
bookNowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Close Modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Switch between Login and Signup
switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (formTitle.textContent === "Login") {
    formTitle.textContent = "Sign Up";
    submitBtn.textContent = "Sign Up";
    toggleForm.innerHTML = `Already have an account? <a href="#" id="switch-to-signup">Login</a>`;
  } else {
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    toggleForm.innerHTML = `Don't have an account? <a href="#" id="switch-to-signup">Sign Up</a>`;
  }
});

