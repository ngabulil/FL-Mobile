gsap.fromTo(
    ".loader1",
    { opacity: 0, y: "100%" },
    {
      opacity: 1,
      y: "0%",
      duration: 0.8,
      onComplete: function () {
        gsap.to(".loader2", {
          opacity: 1,
          y: "0%",
          duration: 0.5,
          onComplete: function () {
            gsap.to('.loader1', {
              opacity: 0,
              scale: 0.2
            });
            gsap.to('.loader2', {
              opacity: 0,
              scale: 0.2,
              duration: 0.1,
              onComplete: function () {
                gsap.fromTo('.loader3', {
                  opacity: 0,
                  scale: 1.5
                }, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  onComplete: function () {
                    gsap.to('.loader1, .loader2, .loader3', {
                      opacity: 0,
                      duration: 0.3,
                      onComplete: function () {
                        gsap.fromTo('.loader4', {
                          opacity: 0,
                          scale: 0.3
                        }, {
                            y: "-5%",
                          opacity: 1,
                          scale: 1,
                          duration: 0.7,
                          onComplete: function() {
                            const collection = document.getElementsByClassName("content");
                            const collection1 = document.getElementsByClassName("container");
                            const collection2 = document.getElementsByClassName("container");
                            collection[0].style.display = "flex";
                            // collection[0].style.marginBottom = "100px";
                            collection1[0].style.height = "fit";
                            gsap.to('.content', {
                              opacity: 1,
                              duration: 0.3,
                              delay: 0.3,
                              y: "-45%",
                              onComplete: function(){
                            const collection = document.getElementsByClassName("title-login");
                            collection[0].style.display = "block";
                                gsap.fromTo('.title-login' , {
                                    opacity: 1,
                                    duration: 0.3,
                                    delay: 0.3,
                                    x: "-100%",
                                }, {
                                    x: '0'
                                })
                              }
                            });
                          }
                        });
                      }
                    });
                  },
                });
              },
            });
          },
        });
      },
    }
  );
  
  gsap.to(".loader2", {
    rotation: 180,
    repeat: 0,
    duration: 1.5,
  });
  