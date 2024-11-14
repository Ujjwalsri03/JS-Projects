const commentsContainer = document.getElementById("comments-container");
const newCommentInput = document.getElementById("new-comment");
const addCommentBtn = document.getElementById("add-comment-btn");
const charCounter = document.getElementById("char-counter");
const maxChar = 250;
  
newCommentInput.addEventListener("input", () => {
    const remaining = maxChar - newCommentInput.value.length;
    charCounter.textContent = `${remaining} characters remaining`;
});
  
addCommentBtn.addEventListener("click", () => {
    if (newCommentInput.value.trim() === "") return;
  
    createComment(newCommentInput.value.trim());
    newCommentInput.value = "";
    charCounter.textContent = `${maxChar} characters remaining`;
});
  
function createComment(text, parent = commentsContainer) {
    const commentDiv = document.createElement("div");
    commentDiv.className = "my-2 p-4 bg-gray-100 rounded-lg";
  
    const commentText = document.createElement("p");
    commentText.textContent = text;
    commentDiv.appendChild(commentText);
  
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex space-x-2 mt-2";
  
    const replyButton = document.createElement("button");
    replyButton.className = "text-sm text-blue-500 hover:underline";
    replyButton.textContent = "Reply";
    replyButton.addEventListener("click", () => toggleReplyInput(commentDiv));
    buttonContainer.appendChild(replyButton);
  
    const editButton = document.createElement("button");
    editButton.className = "text-sm text-green-500 hover:underline";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editComment(commentDiv, commentText));
    buttonContainer.appendChild(editButton);
  
    const deleteButton = document.createElement("button");
    deleteButton.className = "text-sm text-red-500 hover:underline";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteComment(commentDiv));
    buttonContainer.appendChild(deleteButton);
  
    commentDiv.appendChild(buttonContainer);
    parent.appendChild(commentDiv);
}
  
function toggleReplyInput(commentDiv) {
    let replyInput = commentDiv.querySelector(".reply-input");
  
    if (replyInput) {
    commentDiv.removeChild(replyInput);
    } else {
        replyInput = document.createElement("div");
        replyInput.className = "reply-input mt-2";
  
        const textarea = document.createElement("textarea");
        textarea.className = "w-full p-2 border rounded-lg mb-1";
        textarea.maxLength = maxChar;
        textarea.placeholder = "Write a reply...";
  
        const charCounter = document.createElement("p");
        charCounter.className = "text-sm text-gray-500 text-right mb-1";
        charCounter.textContent = `${maxChar} characters remaining`;
  
        textarea.addEventListener("input", () => {
          charCounter.textContent = `${maxChar - textarea.value.length} characters remaining`;
        });
  
        const replyBtn = document.createElement("button");
        replyBtn.className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";
        replyBtn.textContent = "Reply";
        replyBtn.addEventListener("click", () => {
          if (textarea.value.trim() !== "") {
            createComment(textarea.value.trim(), commentDiv);
            commentDiv.removeChild(replyInput);
          }
        });
  
        replyInput.appendChild(textarea);
        replyInput.appendChild(charCounter);
        replyInput.appendChild(replyBtn);
        commentDiv.appendChild(replyInput);
    }
}
  
function editComment(commentDiv, commentText) {
    const editInput = document.createElement("textarea");
    editInput.className = "w-full p-2 border rounded-lg mb-1";
    editInput.value = commentText.textContent;
  
    const saveButton = document.createElement("button");
    saveButton.className = "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-2";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        if (editInput.value.trim() !== "") {
          commentText.textContent = editInput.value;
          commentDiv.replaceChild(commentText, editInput);
        saveButton.remove();
        }
      });
  
      commentDiv.replaceChild(editInput, commentText);
      commentDiv.appendChild(saveButton);
}
  
function deleteComment(commentDiv) {
    commentDiv.remove();
}

  