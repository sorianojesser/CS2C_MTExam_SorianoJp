// Toggle Add/Remove Cart button
function toggleCart(button) {
  if (button.textContent === "Add to Cart") {
    button.textContent = "Remove from Cart";
    button.style.backgroundColor = "#cc0000"; // red
  } else {
    button.textContent = "Add to Cart";
    button.style.backgroundColor = "#004080"; // blue
  }
}

// Handle Contact Form Submission
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !title || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  alert(`Thank you, ${name}! Your message has been submitted.`);
  event.target.reset();
  return false;
}