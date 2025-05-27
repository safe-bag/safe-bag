document.querySelector('form').addEventListener('submit', (event) => {
  try {
    event.preventDefault();
    window.location.href = '../home.html';
  } catch (error) {
    console.error('Error during form submission:', error);
    window.location.href = '../error.html';
  }
});