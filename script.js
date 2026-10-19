
// AI-assisted JavaScript: Interactive skill card details.
// This feature supports Sprint 1 skill browsing.

// Select all Learn More buttons.
const skillButtons = document.querySelectorAll(".skill-button");

const skillDialog = document.getElementById("skill-dialog");
const dialogTitle = document.getElementById("dialog-title");
const dialogDescription = document.getElementById("dialog-description");
const closeDialogButton = document.getElementById("close-dialog");

// Add a click event to each skill button.
skillButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const skillName = button.dataset.skill;
        const skillDetails = button.dataset.details;

        // Display the selected skill information.
        dialogTitle.textContent = skillName;
        dialogDescription.textContent = skillDetails;

        skillDialog.showModal();
    });
});

// Allow users to close the skill details popup.
closeDialogButton.addEventListener("click", function() {
    skillDialog.close();
});
