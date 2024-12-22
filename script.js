$(document).ready(function() {
    $('nav ul li a').on('click', function(event) {
        // Add active class to clicked link and remove from others
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // Additional interactivity can be added here as per your needs
});
