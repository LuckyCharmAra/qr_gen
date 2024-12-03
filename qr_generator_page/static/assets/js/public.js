document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.card'); // Select all tabs

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to the clicked tab
            this.classList.add('active');

            // Optionally, filter content based on the selected tab's ID
            const filter = this.id; // Get the tab's ID (e.g., 'tab-all', 'tab-draft')
            filterContent(filter);
        });
    });

    function filterContent(filter) {
        const allContent = document.querySelectorAll('.content-section'); // Ensure you have sections with 'content-section' class in HTML
        allContent.forEach(content => {
            if (content.getAttribute('data-content') === filter || filter === 'tab-all') {
                content.style.display = 'block'; // Show relevant content
            } else {
                content.style.display = 'none'; // Hide other content
            }
        });
    }
});
