const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const pathArray = window.location.pathname.split("/");
  const post_id = pathArray[pathArray.length - 1];
  console.log("post_id:", post_id);

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ post_id, comment_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Request data:", { post_id, comment_text }); // Added console.log
      console.log("Response data:", responseData); // Added console.log
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
