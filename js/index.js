
  function displayFeedback() {
    const feedback = JSON.parse(localStorage.getItem('userFeedback'));
    if (feedback) {
      const testimonialSection = document.getElementById('testimonial');
      testimonialSection.innerHTML = `
        <div class="flex items-center space-x-4">
          <!-- User Profile (Colored Circle) -->
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            ${feedback.name.charAt(0).toUpperCase()}
          </div>
          <!-- User Name -->
          <div>
            <h3 class="text-lg font-semibold">${feedback.name}</h3>
            <p class="text-sm text-gray-500">Customer</p>
          </div>
        </div>
        <!-- Testimonial Feedback -->
        <p class="mt-4 text-gray-700">${feedback.feedback}</p>
      `;
    }
  }

  // Handle form submission
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('fullname').value;
    const feedback = document.getElementById('feedback').value;

    // Save the feedback in localStorage
    const userFeedback = {
      name: name,
      feedback: feedback
    };
    localStorage.setItem('userFeedback', JSON.stringify(userFeedback));

    // Display the feedback on the page
    displayFeedback();

    // Clear the form after submission
    event.target.reset();
  });

  // Display the feedback if it exists in localStorage on page load
  window.onload = function() {
    displayFeedback();
  };