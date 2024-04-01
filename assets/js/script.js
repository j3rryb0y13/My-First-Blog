document.addEventListener('DOMContentLoaded', function() {
  const themeToggleButton = document.querySelector('.theme-toggle-button');
  console.log(themeToggleButton); // Check if the button is selected correctly

  themeToggleButton.addEventListener('click', function() {
    console.log('Button clicked'); // Check if the button click event is detected
    document.body.classList.toggle('dark');
    console.log(document.body.classList.contains('dark')); // Check if the 'dark' class is toggled correctly
    toggleLineColors();
    resetButtonSize();
  });

  function toggleLineColors() {
    const horizontallines = document.querySelectorAll('.horizontal-line');
    horizontallines.forEach(line => {
      line.classList.toggle('dark');
    })
  }

  function resetButtonSize() {
    themeToggleButton.computedStyleMap.transform = 'scale(1)'
  }
});

const spans = document.querySelectorAll ('.word span');

spans.forEach((span,idx) => {
  span.addEventListener('click', (e) =>{
    e.target.classList.add('active');
  });
  span.addEventListener('animationed', (e) => {
    e.target.classList.remove('active');
  });

  //Initial animal
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});