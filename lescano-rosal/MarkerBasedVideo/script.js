 AFRAME.registerComponent('videohandler', {
                init: function () {
                    var onepatt = this.el;
                    this.vid = document.querySelector("#vid");

                    onepatt.addEventListener('markerFound', function () {
                        this.toggle = true;
                        this.vid.play();
                    }.bind(this));

                    onepatt.addEventListener('markerLost', function () {
                        this.toggle = false;
                        this.vid.pause();
                    }.bind(this));
                },
            });
