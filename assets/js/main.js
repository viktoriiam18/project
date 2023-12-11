// Function to open the modal and display a larger image
function openModal(imagePath) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imagePath;
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  // Close the modal when clicking outside the image or on the image itself
  window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
      closeModal();
    }
  };
