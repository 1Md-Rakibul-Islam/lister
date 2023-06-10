// Get the containers and success message element
const items1 = document.querySelector(".items");
const items2 = document.querySelector(".items2");
const successMessage = document.getElementById("successMessage");

// Add event listeners for drag and drop events
items1.addEventListener("dragstart", handleDragStart);
items2.addEventListener("dragover", handleDragOver);
items2.addEventListener("dragenter", handleDragEnter);
items2.addEventListener("dragleave", handleDragLeave);
items2.addEventListener("drop", handleDrop);

// Keep track of the currently dragged item
let draggedItem = null;

function handleDragStart(event) {
  draggedItem = event.target;
  event.target.classList.add("dragging");
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDragEnter(event) {
  event.target.classList.add("drag-enter");
}

function handleDragLeave(event) {
  event.target.classList.remove("drag-enter");
}

function handleDrop(event) {
  event.preventDefault();
  event.target.classList.remove("drag-enter");

  // Append the dragged item to the container
  items2.appendChild(draggedItem);

  // Reset the dragged item's styles
  draggedItem.classList.remove("dragging");

  // Show the success message
  successMessage.style.display = "block";

  // Reset the message after 2 seconds
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 2000);
}

function resetContainers() {
  // Move all items back to the first container
  while (items2.firstChild) {
    items1.appendChild(items2.firstChild);
  }
}
