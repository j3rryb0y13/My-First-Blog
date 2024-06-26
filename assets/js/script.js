document.addEventListener('DOMContentLoaded', function() {
  const themeToggleButton = document.querySelector('.theme-toggle-button');
  console.log(themeToggleButton); 

  themeToggleButton.addEventListener('click', function() {
    console.log('Button clicked'); 
    document.body.classList.toggle('dark');
    console.log(document.body.classList.contains('dark')); 
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

 
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});

document.getElementById('blog-form').addEventListener('submit', function(event){
  event.preventDefault();

  var username = document.getElementById('username').value;
  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;
   
  var blogPost = {
    username: username,
    title: title,
    content: content,
    date: new Date().toISOString(title, JSON.stringify(blogPost))
    };

    localStorage.setItem(title, JSON.stringify(blogPost));

    window.location.href = 'blog.html';
})