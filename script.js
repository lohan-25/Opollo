
let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
main.addEventListener("mousemove", function(events){


  gsap.to(cursor, {
    x: events.x,
    y: events.y,
    duration: 1,
    ease: "back.out" 
  })

})


function sectionOne(){
  let tl = gsap.timeline();
  gsap.set(".hero-right img",{opacity:0, y: 10,scale: 1.6});
  
  
  tl.from(".nav-left img, .nav-right h5, button",{
    y: -40,
    opacity: 0,
    duration: 0.5,
    delay: 1,
  stagger: 0.15
  })
  
  tl.from(".hero-left h1",{
    x: -300,
    opacity: 0,
    duration: 0.5
  })
  
  tl.from(".hero-left h5",{
    x: -200,
    opacity: 0,
    duration: 0.4
  })
  
  tl.from(".hero-left p",{
    x: -200,
    opacity: 0,
    duration: 0.4
  })
  
  tl.from(".hero-left h3",{
    x: -400,
    opacity: 0,
    duration: 0.4
    
  })
  
 
  
  .to(".hero-right img",{
    delay: -1,
    opacity: 1,
    y: 0,
    scale: 1,
    ease: Expo.easeInOut,
    duration: 1.5
    
  })
}

sectionOne();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".slide img",
    scroller: "body"
  }
  
})

tl2.from (".slide img",{
  y: -50,
  opacity: 0,
  duration: 2,
  stagger: 0.15,
})

gsap.to("play-btn", { scale: 1.2, backgroundColor: "blue", duration: 0.3 });





const playBtn = document.querySelector("#play-btn");


playBtn.addEventListener('mouseenter', () => {
  gsap.to(playBtn, { duration: 0.3, fill: "#E63035" });
});


playBtn.addEventListener('mouseleave', () => {
  gsap.to(playBtn, { duration: 0.3, fill: "#E68C2C" }); 
});



function videoAnimation(){
  let videoSection = document.querySelector("#video-section");
let promoVideo = document.querySelector("#promo-video");


videoSection.addEventListener("click", function() {
  promoVideo.play();
  gsap.to("#promo-video", {
    transform: "scaleX(1) scaleY(1)",
    opacity: 1,
    borderRadius: 0
  });
});


promoVideo.addEventListener("click", function(event) {
  event.stopPropagation(); 
  promoVideo.pause();
  gsap.to("#promo-video", {
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius: "30px"
  });
});

}


videoAnimation();



function animateCounter(elementId, start, end, duration, formatType) {
  let obj = { value: start }; // Object to animate
  gsap.to(obj, {
    value: end,
    duration: duration,
    ease: "power1.out",
    onUpdate: function() {
      const element = document.getElementById(elementId);
      if (formatType === "percentage") {
        element.innerText = Math.floor(obj.value) + "%"; // Append percentage symbol
      } else if (formatType === "currencyM") {
        element.innerText = "$" + Math.floor(obj.value) + "M"; // Prepend $ and append M
      }
    }
  });
}


animateCounter("counter1", 0, 527, 3, "percentage");  
animateCounter("counter2", 0, 85, 3, "percentage");  
animateCounter("counter3", 0, 145, 3, "currencyM");  


function page4Animation() {
  var elemContainer = document.querySelector("#elem-container");
  var fixedImage = document.querySelector("#fixed-image");
  
  elemContainer.addEventListener("mouseenter", function() {
    fixedImage.style.display = "block";
  });
  
  elemContainer.addEventListener("mouseleave", function() {
    fixedImage.style.display = "none";
  });
  
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function() {
      var image = e.getAttribute("data-image");
      fixedImage.style.backgroundImage = `url(${image})`;  // Corrected line
    });
  });
}

page4Animation();


gsap.set(".mobile-left img", {
  opacity: 0,
  y: 10,
  scale: 1.6
});

gsap.to(".mobile-left img", {
  delay: 0.5,  
  opacity: 1,
  y: 0,
  scale: 1,
  ease: "expo.inOut",
  duration: 1.5
});


function stripeAnimation(){
  window.addEventListener("wheel",function(e){
    if(e.deltaY>0){
      gsap.to(".stripe-section", {
        x: -200, 
        delay: 1,
        duration: 2,
        repeat: -1,
        ease: "none"
      });
  
      gsap.to(".stripe-section img",{
        rotate: 180
      })
      
    }
    else{
      gsap.to(".stripe-section", {
        x: 0, 
        delay: 1,
        duration: 2,
        repeat: 1,
        ease: "none"
      });
  
      gsap.to(".stripe-section img",{
        rotate: 0
      })
    }
  })
}

stripeAnimation();