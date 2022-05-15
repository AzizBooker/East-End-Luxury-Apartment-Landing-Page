
barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity:0,
          x:-1000
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          x:1000
        });
      }
    }]
  });

gsap.from('#nav-item-1',{
    opacity:0,
    x:-300,
    duration: 2,
    delay:0.4,
    ease: "power4.out"
    
   
})
gsap.from('#nav-item-2',{
    opacity:0,
    x:-300,
    duration: 2,
    delay:0.6,
    ease: "power4.out"
  

})
gsap.from('#nav-item-3',{
    opacity:0,
    x:-300,
    duration: 2,
    delay:0.8,
    ease: "power4.out"
    
   
})
gsap.from('#nav-item-4',{
    opacity:0,
    x:-300,
    duration: 2,
    delay:1,
    ease: "power4.out"
    
    
})
gsap.from('#nav-item-5',{
    opacity:0,
    x:-300,
    duration: 2,
    delay:1.2,
    ease: "power4.out"

})

gsap.from('.nav-group-2',{
    x:-300,
    duration:2,
    delay:1.2,
    ease: "power4.out"
})

