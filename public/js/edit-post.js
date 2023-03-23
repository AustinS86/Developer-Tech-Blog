const editFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  // Collect values from the login input form
  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  // Send a POST request to the API endpoint
  const response = await fetch(`/api/posts/${id}`, {
    method: "POST",
    body: JSON.stringify({ title, post_text }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the dashboard
    document.location.replace("/dashboard");
  } else {
    alert(result.message);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
