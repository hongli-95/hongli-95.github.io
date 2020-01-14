// <!-- a little js and jQuery for the navbar visual effect (Need to learn more about this)
$(function () {
    $(document).scroll(function() {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scroll", $(this).scrollTop() > $nav.height());
    });
});

