window.onload = function () {
    AFRAME.registerComponent("void-event", {
    init: function () {
      this.audio = document.querySelector("#matrix")
      let void = document.querySelector("#void-model")
      void = void.setAttribute("animation-mixer", "clip: Static Pose")
      this.el.addEventListener(
        "click",
        
