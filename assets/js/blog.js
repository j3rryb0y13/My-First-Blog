document.addEventListener('DOMContentLoaded', function() {
  const postsContainer = document.getElementById('blog-posts');

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const post = JSON.parse(localStorage.getItem(key));

    const postElement = document.createElement('div');
    postElement.className = 'blog-post';
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <span>Posted by: ${post.username}</span>
    `;
    
    postsContainer.appendChild(postElement);
  }
});


var blogPost = {
  username: "authorUsername",
  title: "Post Title",
  content: "Post Content..."
};

localStorage.setItem(blogPost.title, JSON.stringify(blogPost));