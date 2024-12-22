window.onload = function () {
  const userLanguage = navigator.language || navigator.languages[0];
  console.log("User's preferred language:", userLanguage);

  // Match the language in the select dropdown
  const languageSelect = document.getElementById("language-select");
  const options = languageSelect.options;

  // Check for an exact match or partial match (e.g., "en-US" matches "en")
  for (let i = 0; i < options.length; i++) {
    const optionValue = options[i].value;
    if (userLanguage === optionValue || userLanguage.startsWith(optionValue)) {
      languageSelect.selectedIndex = i;
      break;
    }
  }

  // Get the modal
  const modal = document.getElementById("imageModal");

  // Get the modal image element
  const modalImage = document.getElementById("modalImage");

  // Get all thumbnail images
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Get the close button
  const closeModal = document.getElementById("closeModal");

  // When a thumbnail is clicked, open the modal with the image
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImage.src = this.src; // Set the modal image to the clicked thumbnail's image
    });
  });

  // When the close button is clicked, close the modal
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal if the user clicks anywhere outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
