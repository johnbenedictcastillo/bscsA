      //JohannesVeremeer COMPONENTS//
      AFRAME.registerComponent("gwpe-event", {
        init: function () {
          console.log("init");
          let JohannesVermeerBibliography = $("#JohannesVermeerBibliography");
          this.el.addEventListener(
            "click",
            function (e) {
            if (JohannesVermeerBibliography.attr('visible') === false) {
              JohannesVermeerBibliography.attr("visible", true);
            } else {
              JohannesVermeerBibliography.attr("visible", false);
            }
              console.log(JohannesVermeerBibliography.attr('visible'));
            }.bind(this)
            )
            this.el.addEventListener(
                "touch",
                function (e) {
                if (JohannesVermeerBibliography.attr('visible') === false) {
                  JohannesVermeerBibliography.attr("visible", true);
                } else {
               JohannesVermeerBibliography.attr("visible", false);
                }
                  console.log(JohannesVermeerBibliography.attr('visible'));
                }.bind(this)
              )
        },
      });
      
      //LeonardodaVinci COMPONENTS//
       AFRAME.registerComponent("MonaLisa-event", {
        init: function () {
          console.log("init");
          let LeonardodaVinciBibliography = $("#LeonardodaVinciBibliography");
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

            //VincentVanGogh COMPONENTS//
        AFRAME.registerComponent("TheStarryNight-event", {
        init: function () {
          console.log("init");
          let VincentVanGoghBibliography = $("#VincentVanGoghBibliography");
          this.el.addEventListener(
            "click",
            function (e) {
            if (VincentVanGoghBibliography.attr('visible') === false) {
              VincentVanGoghBibliography.attr("visible", true);
            } else {
              VincentVanGoghBibliography.attr("visible", false);
            }
              console.log(VincentVanGoghBibliography.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
            if (VincentVanGoghBibliography.attr('visible') === false) {
              VincentVanGoghBibliography.attr("visible", true);
            } else {
              VincentVanGoghBibliography.attr("visible", false);
            }
              console.log(VincentVanGoghBibliography.attr('visible'));
            }.bind(this)
          )
        },
      });
