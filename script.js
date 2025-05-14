// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    document.getElementById(target).classList.remove('hidden');
  });
});

// Event handling
document.getElementById('magicBtn').addEventListener('click', () => {
  alert('You clicked the magic button!');
});

document.getElementById('magicBtn').addEventListener('dblclick', () => {
  document.body.style.backgroundColor = '#ffe4e1';
});

// Form validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters!';
  } else {
    feedback.textContent = 'Thanks for subscribing!';
    feedback.style.color = 'green';
  }
});
