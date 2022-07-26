<!DOCTYPE html>

<html>
  <head>
    <title>Play ARound</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="styles.css">
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
    <script src="gesture-detector.js"></script>
    <script src="gesture-handler.js"></script>    
  </head>

  <body>
    <a-scene
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      embedded
      renderer="logarithmicDepthBuffer: true;"
      vr-mode-ui="enabled: false"
      gesture-detector
      id="scene"
    >
      <audio id="song" src="./assets/bgmusic.mp3"></audio>

	    
      <a-assets>
        <a-asset-item
          id="swing"
          src="./swing.glb"
        >
        </a-asset-item>
        
        <a-asset-item
          id="asset1"
          src="./asset1.glb"
        >
        </a-asset-item>
        
        <a-asset-item 
        id="asset2" 
        response-type="arraybuffer" 
        src="./asset2.glb"
        >
        </a-asset-item>
        
        <a-asset-item 
        id="climbbar" 
        response-type="arraybuffer" 
        src="./climbbar.glb"
        >
        </a-asset-item>

        <a-asset-item 
        id="wheel" 
        response-type="arraybuffer" 
        src="./wheel.glb"
        >
        </a-asset-item>

      </a-assets>

      <a-asset-item 
      id="confetti" 
      response-type="arraybuffer" 
      src="./confetti.glb"
      >
      </a-asset-item>

    </a-assets>
      
      <a-marker
        type="pattern"
        url="https://tiklaaan.github.io/trial.github.io/marker/pattern-playground-logo.patt"
      >
    
    <a-entity id="entity" look-at="[camera]">
      <a-entity
          gltf-model="#swing" 
          scale="0.1 0.1 0.1" 
          position = "-1.2 0 0.7" 
          animation-mixer = "clip:Take 01"
	  class="clickable"
          gesture-handler
        >
        </a-entity>

	<a-entity
          gltf-model="#asset1" 
          scale="0.0007 0.0007 0.0007" 
          position = "0.7 0 0.7" 
	  animation-mixer = "clip:Spinner|Rotate"
	  class="clickable"
          gesture-handler
        >
        </a-entity>
	
	<a-entity
          gltf-model="#asset2"
          scale="0.8 0.8 0.8" 
          position = "-0.4 0 0.9" 
	class="clickable"
          gesture-handler
        >
        </a-entity>

        <a-entity
        gltf-model="#climbbar" 
          scale="0.01 0.01 0.01" 
        position = "0.3 0 0.7" 
	class="clickable"
          gesture-handler
      >
      </a-entity>

      <a-entity
      gltf-model="#wheel" 
        scale="0.01 0.01 0.01" 
      position = "0.3 -0.5 0.7" 
      animation-mixer = "clip:day24"
class="clickable"
        gesture-handler
    >
    </a-entity>

    <a-entity
    gltf-model="#confetti" 
      scale="0.01 0.01 0.01" 
      position = "-0.4 0 0.9" 
    animation-mixer = "clip:Main"
class="clickable"
      gesture-handler
  >
  </a-entity>


	<a-sound src=#song autoplay="true"> </a-sound>
	</a-entity>
      </a-marker>
      
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
