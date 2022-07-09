<!DOCTYPE html>
<html>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <!-- we import arjs version without NFT but with marker + location based support -->
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
  <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <script src="./script.js"></script>
  <body style="margin: 0px; overflow: hidden">
  

    <a-scene embedded arjs>
      <a-assets>
        <img id="sunnyside" src="./assets/sunnysideup.jpg" />
        <img id="omellette" src="./assets/omellette.jpeg" />
        <img id="eggtoast" src="./assets/eggtoasts.jpg" />
         <img id="sinigangnabangus" src="./assets/sinigangnabangus.jpg" />
         <img id="sisigbangus" src="./assets/sisigbangus.jpg" />
         <img id="paksiwnabangus" src="./assets/paksiwnabangus.jpg" />
          <img id="adobongsitaw" src="./assets/adobongsitaw.jpg" />
          <img id="ginataangsitaw" src="./assets/ginataangsitaw.jpg" />
          <img id="ginisangsitaw" src="./assets/ginisangsitaw.jpg" />
      </a-assets>

      <a-marker sitaw type="pattern" url="./patt/pattern-SITAW.patt">
        <a-plane
          adobongsitaw-event
          src="#adobongsitaw"
          position="-1 0 -1"
          rotation="1 0 0"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>

        <a-plane
          ginataangsitaw-event
          src="#ginataangsitaw"
          position="0 0 -1"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>
        
        <a-plane
          ginisangsitaw-event
          src="#ginisangsitaw"
          position="1 0 -1"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>
        
        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="adobongsitawrecipe"
            value="Heat a frying pan or wok then sear the pork.
                   When oil and juice comes out of the pork, add garlic and onions then cook for 2 minutes.
                   Pour-in the soy sauce, vinegar, and water then bring to a boil.
                   Shake-in the ground black pepper and stir.
                   Cover and simmer for 15 minutes or until the pork is tender.
                   Add the string beans and cook for 3 to 5 minutes.
                   Turn off the heat and transfer to a serving bowl.
                   Serve hot with steamed rice."
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="white"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="ginataangsitawrecipe"
            value="Heat oil in a pan. Add pork. Cook until brown and crispy.
                   Sauté garlic, onion, and ginger.
                   Once the onion softens, pour the coconut milk into the pan. Stir. Cover the pan and let the liquid boil. 
                   Once boiling, adjust the heat to medium and continue boiling for 5 minutes.
                   Add Knorr Pork Cube and squash. Continue cooking for 5 minutes.
                   Add string beans. Cook for 5 to 8 minutes.
                   Season with ground black pepper and fish sauce as needed.
                   Transfer to a serving plate. Serve with warm rice."
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="blue"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="ginisangsitawrecipe"
            value="Heat oil in a pan
                   Sauté garlic, onion, and tomato.
                   Add the ground pork. Cook until color turns medium brown (about 3 to 5 minutes)
                   Add the fish sauce and sprinkle the ground black pepper. Stir.
                   Put-in the string beans. Stir gently. Cover and cook in low to medium heat for 7 to 10 minutes.
                   Remove the cover and stir to distribute the ingredients.
                   Turn off heat. Transfer to a serving plate and enjoy!"
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="red"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

      </a-marker>
      
      <a-marker egg type="pattern" url="./patt/pattern-goodegg-favicon.patt">
        <a-plane
          sunnyside-event
          src="#sunnyside"
          position="-1 0 -1"
          rotation="1 0 0"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>

        <a-plane
          omellette-event
          src="#omellette"
          position="0 0 -1"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>
        <a-plane
          eggtoast-event
          src="#eggtoast"
          position="1 0 -1"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>
        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="sunnyrecipe"
            value="Heat oil in an 8-inch nonstick skillet over medium-low. 
                   Gently crack eggs into pan. 
                   You shouldn't hear a hiss, and the eggs should lie flat and still. 
                   If you hear sizzling or the whites flutter or bubble at all, turn down the heat. 
                   Cook 3 minutes or until the whites are mostly set, with some still-runny whites near the yolks.
                   Tilt pan toward you so oil pools on the bottom edge; dip a spoon in the oil, 
                   and gently baste the uncooked patches of white until they're set. 
                   Be careful not to baste the yolks, or they'll cloud over like cataracts. 
                   Sprinkle with pepper and salt. Remove eggs from pan, leaving excess oil behind."
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="white"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="omelletterecipe"
            value="Beat the eggs: Use two or three eggs per omelette, depending on how hungry you are. 
                   Beat the eggs lightly with a fork.
                   Melt the butter: Use an 8-inch nonstick skillet for a 2-egg omelette, a 9-inch skillet for 3 eggs. 
                   Melt the butter over medium-low heat, and keep the temperature low and slow when cooking the eggs so the bottom doesn't get too brown or overcooked.
                   Add the eggs: Let the eggs sit for a minute, then use a heatproof silicone spatula to gently lift the cooked eggs from the edges of the pan. 
                   Tilt the pan to allow the uncooked eggs to flow to the edge of the pan.
                   Fill the omelette: Add the filling—but don't over stuff the omelette when the eggs begin to set. Cook for a few more seconds
                   Fold and serve: Fold the omelette in half. Slide it onto a plate with the help of a silicone spatula."
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="blue"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="eggtoastrecipe"
            value="In a bowl, combine 1 Tbsp of mayonnaise and ketchup till well combined. Set aside.
                   Combine eggs, milk, salt and black pepper in a bowl till evenly combined and set aside.
                   Spread some butter on both sides of your sliced breads and toast them on a heated pan, till golden brown.
                   Transfer over to a plate and spread one side of the toasts with the ketchup mayo sauce before layering with cheese and ham. Set aside.
                   Heat up your pan on med heat, add 1 Tbsp of butter and pour half of the scramble egg mixture. Use your spatula and begin pulling the cooked outer edges in towards the center of the eggs. 
                   Repeat till the scramble collects in the center of the pan, 90% cooked.
                   Quickly transfer over to the toast, layered with cheese and ham and cover with another piece of toast. And your breakfast is ready!
                   (Optional) : Place the sandwich on a holder, wrapped with parchment and drizzle some more mayonnaise and garnish with some dried parsley"
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="red"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

      </a-marker>
      
      
      <a-marker bangus type="pattern" url="./patt/pattern-bangus.patt">
        <a-plane
          sinigangnabangus-event
          src="#sinigangnabangus"
          position="-1 0 -1"
          rotation="1 0 0"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>

        <a-plane
          sisigbangus-event
          src="#sisigbangus"
          position="0 0 -1"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>
        <a-plane
          paksiwnabangus-event
          src="#paksiwnabangus"
          position="1 0 -1"
          scale="1 1 1"
          look-at="[camera]"
        ></a-plane>
              
        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="sinigangnabangusrecipe"
            value="Heat a cooking pot. Pour water into it.
                   Add tomato and anion. Let boil.
                   Add bangus. Cover and cook in medium heat between 8 to 12 minutes.
                   Add Knorr Sinigang sa Sampaloc Mix. Stir. Cook for 2 minutes.
                   Put the long green pepper into the pot. Add snake beans and okra. Stir. Cover and cook for 5 to 7 minutes.
                   Add fish sauce and ground black pepper. Stir.
                   Put the kangkong leaves into the pot. Cover the pot and turn the heat off. Let it stay for 5 minutes.
                   Transfer to a serving bowl. Serve."
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="white"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="sisigbangusrecipe"
            value="Melt-in butter in a large pan
                   Add the onion and cook for 3 minutes
                   Put-in the ginger. Stir and cook for 2 minutes in low to medium heat.
                   Add the bangus and then stir.
                   Put-in the garlic powder, salt,ground black pepper, and soy sauce. Stir and cook for 5 minutes.
                   Add the chicharon, scallions, and chili. Stir and cook for 3 minutes more.
                   Put-in the mayonnaise. Stir.
                   Transfer to a serving plate. Serve."
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="blue"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

        <a-plane
          look-at="[camera]"
          position="1 1 1"
          scale="1 1 1"
          color="#FFB6C1"
        >
          <a-text
            id="paksiwnabangusrecipe"
            value="Arrange ginger, garlic, okra, onion, long green pepper, peppercorn, and eggplant on the pot.
                   Top with bangus slices.
                   Pour water and vinegar. Apply heat and let boil. Cover and continue to cook in low to medium heat for 15 minutes.
                   Add salt to taste.
                   Transfer to a serving plate. Serve."
            position="1 1 1"
            scale="0.7 0.7 0.7"
            align="left"
            color="red"
            visible="false"
            look-at="[camera]"
          ></a-text>
        </a-plane>

      </a-marker>
      
      <a-entity camera></a-entity>
      <a-entity cursor="rayOrigin:mouse"></a-entity>
      <a-entity cursor="fuse: true; fuseTimeout: 500"></a-entity>
      <a-entity cursor raycaster="far: 20; interval: 1000; objects: .clickable"></a-entity>
    </a-scene>
  </body>
</html>
