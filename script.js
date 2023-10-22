gsap.to("nav", {
    backgroundColor: '#000',
    duration: 0.5,
    height: "3.5vw",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

let cursor = document.querySelector("#cursor");
let blurCursor = document.querySelector("#blur-cursor");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blurCursor.style.left = dets.x - 200 + "px"
    blurCursor.style.top = dets.y - 200 + "px"

})

navMenu = document.querySelectorAll("nav h4, #page4 .box");
navMenu.forEach(function (dets) {
    dets.addEventListener("mouseenter", function () {
        cursor.style.height = "70px"
        cursor.style.width = "70px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "2px solid #000"
    })
    dets.addEventListener("mouseleave", function () {
        cursor.style.height = "20px"
        cursor.style.width = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundColor = "#95c11e"
        cursor.style.border = "none"
        cursor.style.transition = "none"
    })
}
)

gsap.from("nav", {
    y: -50,
    duration: 1.5,
    opacity: 0
})
gsap.from("#page1 h1", {
    y: 50,
    duration: 1.5,
    opacity: 0,
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 5
    }
})
gsap.from(".card", {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 80%",
        end: "bottom 70%",
        scrub: 2
    }
})
gsap.from("#colon1", {
    x: -70,
    y: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 7
    }
})
gsap.from("#colon2", {
    x: 70,
    y: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 7
    }
})
gsap.from("#page4 h3", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h3",
        scroller: "body",
        start: "top 80%",
        end: "bottom 75%",
        scrub: 4,
    }
})

