(function ($) {
  "use strict";

  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            const element = $(this);
            console.log(element);

            if ($(this).parent().parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().parent().addClass("active");
              $(this).parent().parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

  if ($(".faq-one__single").length) {
    var faqCount = $(".faq-one__single").length;
    $(".faq-one")
      .find("[class*=col-]")
      .eq(faqCount - 2)
      .css({
        "padding-bottom": "0",
        "border-bottom": "0",
      });
    $(".faq-one")
      .find("[class*=col-]")
      .eq(faqCount - 1)
      .css({
        "padding-bottom": "0",
        "border-bottom": "0",
      });
  }
})(jQuery);

const Components = {
  accordins: document.querySelectorAll(".acc-heading"),
  backdiv: document.querySelector(".backdiv"),
  loading: document.querySelector(".loading-area"),
  text: document.querySelectorAll(".loading-area span"),
  animate: document.querySelectorAll(".anim"),
};

function loading() {
  const tl = gsap.timeline();

  tl.from(Components.text, {
    y: 30,
    autoAlpha: 0,
    stagger: 0.05,
    ease: Expo.easeInOut,
  });

  tl.from(Components.loading.querySelector("img"), {
    scale: 0,
    autoAlpha: 0,
  });

  tl.to(Components.loading.querySelector("img"), {
    scale: 0,
    autoAlpha: 0,
    delay: 1,
  });

  tl.to(Components.text, {
    y: 30,
    autoAlpha: 0,
    stagger: 0.1,
    ease: Expo.easeInOut,
  });

  tl.to(Components.loading, {
    scaleY: 0,
    transformOrigin: "top",
    ease: Expo.easeInOut,
  });

  tl.from(Components.animate, {
    y: 20,
    autoAlpha: 0,
    delay: 1,
    stagger: 0.1,
  });
}
loading();
