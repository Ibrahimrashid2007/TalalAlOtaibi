// Contact Us Transition 
// Start
document.getElementById('contactUsButton').addEventListener('click', function() {
    // Add the slide-out class
    document.body.classList.add('slide-out');

    // Redirect to the new page after 0.5 seconds
    setTimeout(function() {
        window.location.href = 'contactus.html';
    }, 500); // 500ms is the duration of the transition
});
      const header = document.querySelector("header");
      const menuToggler = document.querySelectorAll("#menu_toggle");

      menuToggler.forEach(toggler => {
        toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
      });
// End 