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
  