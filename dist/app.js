<script>
  // Get the menu button and the navigation links
  const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('ul');

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
    // Toggle the 'hidden' class on the navigation links
        navLinks.classList.toggle('hidden');
      });
</script>