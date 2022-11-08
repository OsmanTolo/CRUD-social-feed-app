const form = document.querySelector("#new-post");
const newPostInput = document.querySelector("#new-post-input");
const posts = document.querySelector("#posts");
// const postContent = document.querySelector()

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  if (newPostInput.value === "") {
    // Todo create a function to handle error message
    newPostInput.placeholder = "Post field cannot be blank";
    newPostInput.classList.add("error-msg");
  } else {
    newPostInput.placeholder = "";
    newPostInput.classList.remove("error-msg");
    acceptPostData();
    createPost();
  }
};

const postData = []; //Array to store the post objects from acceptPostData()

const acceptPostData = () => {
  // postData["content"] = newPostInput.value;
  postData.push({
    content: newPostInput.value,
  });
  console.log(postData);
  // Todo: add date to the object data
};

const createPost = () => {
  posts.innerHTML += `
  <section class="post-feed card">
    <div class="post-list">
      <div class="post-details">
        <img
          src="assets/image-jonathan.jpg"
          alt="Image of the user"
          class="profile-pic"
        />
        <div class="post-time-details">
          <h4>John Doe</h4>
          <span class="time-posted">18:00 hr</span>
          <span class="date-posted">Yesterday</span>
        </div>
      </div>
      <p class="post-content">${postData.content}</p>
      <div class="post-actions">
        <button onclick="editPost(this)" class="edit">Edit</button>
        <button onClick="deletePost(this)" class="delete">Delete</button>
      </div>
    </div>
  </section>`;

  // Reset the form
  newPostInput.value = "";
  newPostInput.placeholder = "What's on your mind?";
};

const deletePost = (e) => {
  e.parentElement.parentElement.parentElement.remove();
};

const editPost = (e) => {
  newPostInput.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.parentElement.remove();
};
