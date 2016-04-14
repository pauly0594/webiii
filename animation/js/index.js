/* jquery.js */
/* jquery.velocity.js */

// Animate an SVG element with a mix of standard CSS properties and SVG-specific properties.
/*$("#rect")
  .delay(500)
  .velocity({
    x: "+=300",
    y: "25%"
  })
  .velocity({
    fillRed: 255,
    fillGreen: 255,
    fillBlue: 255,
    strokeWidth: 2
  })
  .velocity({
    height: 50,
    width: 50
  })
  .velocity({
    rotateZ: 90,
    scaleX: 0.5
  })
  .velocity("reverse", {
    delay: 250
  });*/
//$.Velocity.mock = 50;


$("#delta")
 
.velocity({
  scale: 200,
  delay:300
  
  
  })

 .velocity("reverse", {
  scale: 200,
   });

$("#delta")
  .delay(1200)
  .velocity({
    fillRed: 255,
    fillGreen: 255,
    fillBlue: 255,
    strokeWidth: 2
  });

$("#delta")
  .velocity({
    fillRed: 1,
    fillGreen: 121,
    fillBlue: 255,  
  });
$("#delta")
  .delay(50)
  .velocity({
    fillRed: 1,
    fillGreen: 171,
    fillBlue: 232,  
  });
$("#delta")
  .delay(50)
  .velocity({
    fillRed: 12,
    fillGreen: 255,
    fillBlue: 255,  
  });
$("#delta")
  .delay(50)
  .velocity({
    fillRed: 1,
    fillGreen: 232,
    fillBlue: 167,  
  });
$("#delta")
  .delay(50)
  .velocity({
    fillRed: 1,
    fillGreen: 255,
    fillBlue: 111,  
  });
$("#delta")
  .delay(50)
  .velocity({
    fillRed: 0,
    fillGreen: 0,
    fillBlue: 0,  
  });
// setInterval(function() {
//   $("#delta").velocity("transition.slideLeftBigIn",{ 
//     stagger: 250 })
//   .delay(750)
   
// .velocity({ opacity: 0 }, 750)
 
// }, 100);