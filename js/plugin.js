﻿$(document).ready(function() {
    $(".mob-menu-icon,.menu-link").click(function() {
        $(".mob-menu").hasClass("mob-show") ? ($(".mob-menu").removeClass("mob-show"), $(".mob-menu").addClass("animation-off"), $(".icon-bar").removeClass("open")) : ($(".mob-menu").removeClass("animation-off"), $(".mob-menu").addClass("mob-show"), $(".mob-menu").css({
            transform: "translateX(0px)",
            "-moz-transform": "translateX(0px)",
            "-webkit-transform": "translateX(0px)",
            "-o-transform": "translateX(0px)",
            transtion: "all 25s linear",
            "-moz-transtion": "all 25s linear",
            "-webkit-transtion": "all 25s linear",
            "-o-transtion": "all 25s linear"
        }), $(".icon-bar").addClass("open"))
    })
}), $(document).ready(function() {
    $('a[href^="#"]').on("click", function(o) {
        o.preventDefault();
        var n, a = this.hash,
            s = $(a);
            if(s.length)
        n = 0 == $(window).scrollTop() ? s.offset().top - 0 : s.offset().top - 60, $("html, body").stop().animate({
            scrollTop: n
        }, 900, "swing", function() {})
    }), $("#name,#email,#message").on("focusout", function() {
        return $(this).val() ? void $("#send_email").prop("disabled", !1) : ($(this).attr("placeholder", "This field is required*"), $("#send_email").prop("disabled", !0), $(this).focus(), !1)
    })
});