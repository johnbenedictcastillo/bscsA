      //EGGS COMPONENTS//
      AFRAME.registerComponent("Girl with a pearl earring-event", {
        init: function () {
          console.log("init");
          let Girl with a pearl earring = $("#Girl with a pearl earring");
          let JohannesVermeerBibliography = $("#JohannesVermeerBibliography ");
          this.el.addEventListener(
            "click",
            function (e) {
            if (JohannesVermeerBibliography .attr('visible') === false) {
              JohannesVermeerBibliography attr("visible", true);
            } else {
              JohannesVermeerBibliography .attr("visible", false);
            }
              console.log(JohannesVermeerBibliography attr('visible'));
            }.bind(this)
            )
            this.el.addEventListener(
                "touch",
                function (e) {
                if (JohannesVermeerBibliography .attr('visible') === false) {
                  JohannesVermeerBibliography .attr("visible", true);
                } else {
               JohannesVermeerBibliography .attr("visible", false);
                }
                  console.log(JohannesVermeerBibliography .attr('visible'));
                }.bind(this)
              )
        },
      });
      
      //Leonardo da Vinci COMPONENTS//
       AFRAME.registerComponent("Mona Lisa-event", {
        init: function () {
          console.log("init");
          let sinigangnabangus = $("#Mona Lisa");
          let sinigangnabangusrecipe = $("#LeonardodaVinciBibliography");
          this.el.addEventListener(
            "click",
            function (e) {
            if (LeonardodaVinciBibliography.attr('visible') === false) {
            LeonardodaVinciBibliography.attr("visible", true);
            } else {
             LeonardodaVinciBibliography.attr("visible", false);
            }
              console.log(LeonardodaVinciBibliography.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
            if (LeonardodaVinciBibliography.attr('visible') === false) {
              LeonardodaVinciBibliography.attr("visible", true);
            } else {
             LeonardodaVinciBibliography.attr("visible", false);
            }
              console.log(LeonardodaVinciBibliography.attr('visible'));
            }.bind(this)
          )
        },
      });

            //Vincent Van Gough COMPONENTS//
        AFRAME.registerComponent("The Starry Night-event", {
        init: function () {
          console.log("init");
          let The Starry Night- = $("#The Starry Night-");
          let VincentVanGoughBibliography = $("#VincentVanGoughBibliography");
          this.el.addEventListener(
            "click",
            function (e) {
            if (VincentVanGoughBibliography.attr('visible') === false) {
              VincentVanGoughBibliography.attr("visible", true);
            } else {
              VincentVanGoughBibliography.attr("visible", false);
            }
              console.log(VincentVanGoughBibliography.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
            if (VincentVanGoughBibliography.attr('visible') === false) {
              VincentVanGoughBibliography.attr("visible", true);
            } else {
              VincentVanGoughBibliography.attr("visible", false);
            }
              console.log(VincentVanGoughBibliography.attr('visible'));
            }.bind(this)
          )
        },
      });
