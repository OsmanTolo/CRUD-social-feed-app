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

let postData = []; //Array to store the post objects from acceptPostData()

const acceptPostData = () => {
  // postData["content"] = newPostInput.value;
  postData.push({
    content: newPostInput.value,
  });
  console.log(postData);
  // Todo: add date to the object data

  // Store post data to local storage
  localStorage.setItem("postData", JSON.stringify(postData));
};

const createPost = () => {
  // 1. Clear all the tasks
  posts.innerHTML = "";

  // 2. Display the posts
  postData.map((x, y) => {
    return (posts.innerHTML += `
    <section class="post-feed card" id="${y}">
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
        <p class="post-content">${x.content}</p>
        <div class="post-actions">
          <button onclick="editPost(this)" class="edit">Edit</button>
          <button onClick="deletePost(this);createPost()" class="delete">Delete</button>
        </div>
      </div>
    </section>`);
  });

  // 3. Reset the post input field and place holder text
  newPostInput.value = "";
  newPostInput.placeholder = "What's on your mind?";
};

const deletePost = (e) => {
  e.parentElement.parentElement.parentElement.remove();
  postData.splice(e.parentElement.parentElement.parentElement.id, 1);
  localStorage.setItem("postData", JSON.stringify(postData));
  console.log(postData);
};

const editPost = (e) => {
  newPostInput.value = e.parentElement.previousElementSibling.innerHTML;
  // e.parentElement.parentElement.parentElement.remove();
  deletePost(e);
};

// IIFE - Immediately Invoke Functionally Expression
/* 
Everytime the page refreshes, get all post data from local storage and 
push it to the postData array 
*/
(() => {
  postData = JSON.parse(localStorage.getItem("postData")) || [];
  createPost();
  console.log(postData);
})();
