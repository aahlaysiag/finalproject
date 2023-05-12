// Guilty Spark Following Mouse
$(document).mousemove(function(e) {
    $('.guiltyfollow').offset({
        left: e.pageX,
        top: e.pageY+20
    });

});
