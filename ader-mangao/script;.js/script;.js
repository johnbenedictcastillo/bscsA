      //EGGS COMPONENTS//
      AFRAME.registerComponent("sunnyside-event", {
        init: function () {
          console.log("init");
          let sunnyside = $("#sunnyside");
          let sunnyrecipe = $("#sunnyrecipe");
          this.el.addEventListener(
            "click",
            function (e) {
            if (sunnyrecipe.attr('visible') === false) {
              sunnyrecipe.attr("visible", true);
            } else {
              sunnyrecipe.attr("visible", false);
            }
              console.log(sunnyrecipe.attr('visible'));
            }.bind(this)
            )
            this.el.addEventListener(
                "touch",
                function (e) {
                if (sunnyrecipe.attr('visible') === false) {
                  sunnyrecipe.attr("visible", true);
                } else {
                  sunnyrecipe.attr("visible", false);
                }
                  console.log(sunnyrecipe.attr('visible'));
                }.bind(this)
              )
        },
      });
      AFRAME.registerComponent("omellette-event", {
        init: function () {
          console.log("init")
          let omellette = $("#omellette")
          let omelletterecipe = $("#omelletterecipe")
          this.el.addEventListener(
            "click",
            function (e) {
                if (omelletterecipe.attr('visible') === false) {
                    omelletterecipe.attr("visible", true);
                } else {
                    omelletterecipe.attr("visible", false);
                }
                console.log(omelletterecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
              if (omelletterecipe.attr('visible') === false) {
                omelletterecipe.attr("visible", true);
            } else {
              omelletterecipe.attr("visible", false);
            }
            console.log(omelletterecipe.attr('visible'));
            }.bind(this)
          )
        },
      });

      AFRAME.registerComponent("eggtoast-event", {
        init: function () {
          console.log("init")
          let eggtoast = $("#eggtoast")
          let eggtoastrecipe = $("#eggtoastrecipe")
          this.el.addEventListener(
            "click",
            function (e) {
              if (eggtoastrecipe.attr('visible') === false) {
                eggtoastrecipe.attr("visible", true);
            } else {
              eggtoastrecipe.attr("visible", false);
            }
            console.log(eggtoastrecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
              if (eggtoastrecipe.attr('visible') === false) {
                eggtoastrecipe.attr("visible", true);
            } else {
              eggtoastrecipe.attr("visible", false);
            }
            console.log(eggtoastrecipe.attr('visible'));
            }.bind(this)
          )
        },
      });
      // END OF EGGS COMPONENTS//
      
      
      //BANGUS COMPONENTS//
       AFRAME.registerComponent("sinigangnabangus-event", {
        init: function () {
          console.log("init");
          let sinigangnabangus = $("#sinigangnabangus");
          let sinigangnabangusrecipe = $("#sinigangnabangusrecipe");
          this.el.addEventListener(
            "click",
            function (e) {
            if (sinigangnabangusrecipe.attr('visible') === false) {
              sinigangnabangusrecipe.attr("visible", true);
            } else {
              sinigangnabangusrecipe.attr("visible", false);
            }
              console.log(sinigangnabangusrecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
            if (sinigangnabangusrecipe.attr('visible') === false) {
              sinigangnabangusrecipe.attr("visible", true);
            } else {
              sinigangnabangusrecipe.attr("visible", false);
            }
              console.log(sinigangnabangusrecipe.attr('visible'));
            }.bind(this)
          )
        },
      });
      AFRAME.registerComponent("sisigbangus-event", {
        init: function () {
          console.log("init")
          let sisigbangus = $("#sisigbangus")
          let sisigbangusrecipe = $("#sisigbangusrecipe")
          this.el.addEventListener(
            "click",
            function (e) {
              if (sisigbangusrecipe.attr('visible') === false) {
                sisigbangusrecipe.attr("visible", true);
            } else {
              sisigbangusrecipe.attr("visible", false);
            }
            console.log(sisigbangusrecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
              if (sisigbangusrecipe.attr('visible') === false) {
                sisigbangusrecipe.attr("visible", true);
            } else {
              sisigbangusrecipe.attr("visible", false);
            }
            console.log(sisigbangusrecipe.attr('visible'));
            }.bind(this)
          )
        },
      });

      AFRAME.registerComponent("paksiwnabangus-event", {
        init: function () {
          console.log("init")
          let paksiwnabangus = $("#paksiwnabangus")
          let paksiwnabangusrecipe = $("#paksiwnabangusrecipe")
          this.el.addEventListener(
            "click",
            function (e) {
              if (paksiwnabangusrecipe.attr('visible') === false) {
                paksiwnabangusrecipe.attr("visible", true);
            } else {
              paksiwnabangusrecipe.attr("visible", false);
            }
            console.log(paksiwnabangusrecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
              if (paksiwnabangusrecipe.attr('visible') === false) {
                paksiwnabangusrecipe.attr("visible", true);
            } else {
              paksiwnabangusrecipe.attr("visible", false);
            }
            console.log(paksiwnabangusrecipe.attr('visible'));
            }.bind(this)
          )
        },
      });
      //END OF BANGUS COMPONENTS//
      
            //SITAW COMPONENTS//
        AFRAME.registerComponent("adobongsitaw-event", {
        init: function () {
          console.log("init");
          let adobongsitaw = $("#adobongsitaw");
          let adobongsitawrecipe = $("#adobongsitawrecipe");
          this.el.addEventListener(
            "click",
            function (e) {
            if (adobongsitawrecipe.attr('visible') === false) {
              adobongsitawrecipe.attr("visible", true);
            } else {
              adobongsitawrecipe.attr("visible", false);
            }
              console.log(adobongsitawrecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
            if (adobongsitawrecipe.attr('visible') === false) {
              adobongsitawrecipe.attr("visible", true);
            } else {
              adobongsitawrecipe.attr("visible", false);
            }
              console.log(adobongsitawrecipe.attr('visible'));
            }.bind(this)
          )
        },
      });
      AFRAME.registerComponent("ginataangsitaw-event", {
        init: function () {
          console.log("init")
          let ginataangsitaw = $("#ginataangsitaw")
          let ginataangsitawrecipe = $("#ginataangsitawrecipe")
          this.el.addEventListener(
            "click",
            function (e) {
              if (ginataangsitawrecipe.attr('visible') === false) {
                ginataangsitawrecipe.attr("visible", true);
            } else {
              ginataangsitawrecipe.attr("visible", false);
            }
            console.log(ginataangsitawrecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
              if (ginataangsitawrecipe.attr('visible') === false) {
                ginataangsitawrecipe.attr("visible", true);
            } else {
              ginataangsitawrecipe.attr("visible", false);
            }
            console.log(ginataangsitawrecipe.attr('visible'));
            }.bind(this)
          )
        },
      });

      AFRAME.registerComponent("ginisangsitaw-event", {
        init: function () {
          console.log("init")
          let ginisangsitaw = $("#ginisangsitaw")
          let ginisangsitawrecipe = $("#ginisangsitawrecipe")
          this.el.addEventListener(
            "click",
            function (e) {
              if (ginisangsitawrecipe.attr('visible') === false) {
                ginisangsitawrecipe.attr("visible", true);
            } else {
              ginisangsitawrecipe.attr("visible", false);
            }
            console.log(ginisangsitawrecipe.attr('visible'));
            }.bind(this)
          )
          this.el.addEventListener(
            "touch",
            function (e) {
              if (ginisangsitawrecipe.attr('visible') === false) {
                ginisangsitawrecipe.attr("visible", true);
            } else {
              ginisangsitawrecipe.attr("visible", false);
            }
            console.log(ginisangsitawrecipe.attr('visible'));
            }.bind(this)
          )
        },
      });
      // END OF SITAW COMPONENTS//
