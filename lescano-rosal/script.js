window.onload = function () {
    AFRAME.registerComponent("void-event", {
    init: function () {
      this.audio = document.querySelector("#matrix")
      let void = document.querySelector("#void-model")
      void = void.setAttribute("animation-mixer", "clip: Static Pose")
      this.el.addEventListener(
        "click", function (e) 
{
   let void = document.querySelector("#void-model")         
            console.log(void.getAttribute("animation-mixer").clip)
            if(void.getAttribute("animation-mixer").clip === "Animation"){
                void.setAttribute("animation-mixer", "clip: Static Pose")   
                this.audio.pause()
                this.audio.currentTime = 0

}else{
                void.setAttribute(
                    "animation-mixer",
                    "clip: Animation; loop: repeat; timeScale: 5"
                    )
                    this.audio.play()
                    this.audio.loop = true
                } 
          console.log(e)
        }.bind(this)
      )
           this.el.addEventListener('mouseenter', function (e) {
                    console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('mouseleave', function (e) {
			 console.log(e)
                }.bind(this));

      this.el.addEventListener('touchmove', function (e) {
                    //this.audio.play();
			
                  console.log(e)
                }.bind(this));
                this.el.addEventListener('touchstart', function (e) {
			let void = document.querySelector('#void-model')
		    deer.setAttribute('animation-mixer', "clip: Animation; loop: repeat; timeScale: 5");
                    this.audio.play();
			
			console.log(e)
                }.bind(this));
		    
		 this.el.addEventListener('touchend', function (e) {
			 console.log(e)
                }.bind(this));
		    
		
                this.el.addEventListener('animation-finished', function (e) {
			 console.log(e)
                    let void = document.querySelector('#void-model')
		    void.removeAttribute('animation-mixer');
                }.bind(this));
		
            }
        });
    };
