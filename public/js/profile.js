const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#posts-title').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#posts-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.matches('.btn-danger')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const editButtonHandler =  (event) => {
  console.log(event)
  if (event.target.matches('.btn-info')) {
    const id = event.target.getAttribute('data-id');

   

   
      document.location.replace(`/posts/${id}`);
      console.log(document.location.replace)
  } 
};

document
  .querySelector('#new-posts-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#posts-list')
  .addEventListener('click', delButtonHandler);

  document
  .querySelector('#posts-list')
  .addEventListener('click', editButtonHandler);
