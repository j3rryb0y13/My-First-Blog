document.addEventListener('DOMContentLoaded', function() {
  const themeToggleButton = document.querySelector('.theme-toggle-button');
  console.log(themeToggleButton); // Check if the button is selected correctly

  themeToggleButton.addEventListener('click', function() {
    console.log('Button clicked'); // Check if the button click event is detected
    document.body.classList.toggle('dark');
    console.log(document.body.classList.contains('dark')); // Check if the 'dark' class is toggled correctly
  });
});
