const form = document.querySelector("#new-post");
const newPostInput = document.querySelector("#new-post-input");
// const errorMsg = document.querySelector("error-msg");

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
  }
};

const postData = [];

const acceptPostData = () => {
  postData["post-text"] = newPostInput.value;
  console.log(postData);
};
