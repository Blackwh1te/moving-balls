(function ($) {
$(document).ready(function() {

   let balls = [];

   $('.field .ball').each(function () {
      balls.push($(this));
   });

   let ball1 = balls[0];
   let ball2 = balls[1];
   let ball3 = balls[2];

   function getRadius(el) {
     return (el.width() / 2);
   };

   let ball1Radius = getRadius(ball1);
   let ball2Radius = getRadius(ball2);
   let ball3Radius = getRadius(ball3);    
   
   function distanceToElementCenter(e, el) {
      return Math.round(
         Math.sqrt(  
         Math.pow( (e.pageX - (el.offset().left + el.width() / 2)), 2 )
         + 
         Math.pow( (e.pageY - (el.offset().top + el.height() / 2)), 2 )
         )
      );
   };


   function distaceToElementBorder(e, el) {
      return distanceToElementCenter(e, ball1) - (ball1.width() / 2);
   };
   
   function translate(e, el, distance) {
      let offset = 1 - (distance * 0.2);
      // el.css('transition', `all ${0.3}s ease`)
      el.css('transform', `translate(${offset}px, ${offset}px)`)
   }

   // Distance between element and cursor:
   function posX(e, el) {
      return Math.round( (el.offset().left + el.width() / 2) );
   };

   // Distance between element and cursor:
   function posY(e, el) {
      return Math.round( (el.offset().top + el.height() / 2) );
   };

   // // Перемещение мыши в области расположения шаров:
   // $('.field').mousemove(function (e) {

   //    console.log( `ball1: ${ distanceToElementCenter(e, ball1) }` );
   //    // console.log( `ball1 radius: ${ ball1Radius }` );

   //    // console.log( `ball2: ${ distanceToElementCenter(e, ball2) }` );
   //    // console.log( `ball2 radius: ${ ball2Radius }` );

   //    // console.log( `ball3: ${ distanceToElementCenter(e, ball3) }` );
   //    // console.log( `ball3 radius: ${ ball3Radius }` );

   //    // if (distanceToElementCenter(e, ball1) < 220) {
   //    // // ball1.cs
   //    // translate(e, ball1, distanceToElementCenter(e, ball1));
   //    // } else {
   //    // ball1.css('transform', 'translate(0px, 0px)');
   //    // }
   // });

   function moveTheBall(e, el) {
      // el.css('transform', `translate(${  }, ${  })`);

      let offsetFactor = 0.15;

      // Правый верхний угол:
      if ( (e.pageX > posX(e, el)) && (e.pageY < posY(e, el)) ) {
         el.css('transform', `translate(${ (posX(e, el) - e.pageX) * offsetFactor }px,${ (posY(e, el) - e.pageY) * offsetFactor }px)`);
      };
      // Правый нижний угол:
      if ( (e.pageX > posX(e, el)) && (e.pageY > posY(e, el)) ) {
         el.css('transform', `translate(${ (posX(e, el) - e.pageX) * offsetFactor }px,${ (posY(e, el) - e.pageY) * offsetFactor }px)`);
      };
      // Левый верхний угол:
      if ( (e.pageX < posX(e, el)) && (e.pageY < posY(e, el)) ) {
         el.css('transform', `translate(${ (posX(e, el) - e.pageX) * offsetFactor }px,${ (posY(e, el) - e.pageY) * offsetFactor }px)`);
      };
      // Левый нижний угол:
      if ( (e.pageX < posX(e, el)) && (e.pageY > posY(e, el)) ) {
         el.css('transform', `translate(${ (posX(e, el) - e.pageX) * offsetFactor }px,${ (posY(e, el) - e.pageY) * offsetFactor }px)`);
      };
   }

   function moveToStart(el) {
     el.css('transform', 'initial'); 
   };
   

   let timesPerSecond = 15; // how many times to fire the event per second
   let wait = false;
   // Отслеживание позиции курсора мыши в области расположения шаров:
   $('.field').mousemove(function (e) {
      // don't handle events when one has just occurred
      if (!wait) {
         
         // let fieldX = e.pageX;
         // let fieldY = e.pageY;
         // console.log('****************');
         // console.log('fieldX: ' + fieldX);
         // console.log('fieldY: ' + fieldY);
         // console.log( `ball1: posX = ${ posX(e, ball1) }` );
         // console.log( `ball1: posY = ${ posY(e, ball1) }` );
         // console.log('****************');

         // console.log( `ball2: posX = ${ posX(e, ball2) }` );
         // console.log( `ball2: posY = ${ posY(e, ball2) }` );

         // console.log( `ball3: posX = ${ posX(e, ball3) }` );
         // console.log( `ball3: posY = ${ posY(e, ball3) }` );

         // console.log( `Distance to ball1: ${ distanceToElementCenter(e, ball1) }` );
         // console.log( `Distance to ball2: ${ distanceToElementCenter(e, ball2) }` );
         // console.log( `Distance to ball3: ${ distanceToElementCenter(e, ball3) }` );



         // console.log( `Radius ball1: ${ ball1Radius }` );
         // console.log( `Radius ball2: ${ ball2.width() / 2 }` );
         // console.log( `Radius ball3: ${ ball3.width() / 2 }` );

         // console.log(`D-R: ${ distaceToElementBorder(e, ball1) }`)
         // console.log(`D-R: ${ distanceToElementCenter(e, ball2) - (ball2.width() / 2) }`)
         // console.log(`D-R: ${ distanceToElementCenter(e, ball3) - (ball3.width() / 2) }`)
         // if (distanceToElementCenter(e, ball2) - ball2.width())


         // if ( (distaceToElementBorder(e, ball1) < 100) && (distaceToElementBorder(e, ball1) > 50) ) {
         //    // console.log('So close...');
         //    moveTheBall(ball1);
         // };


         if ( (distanceToElementCenter(e, ball1) - ball1Radius) < 180 ) {
            moveTheBall(e, ball1);
         } else {
            moveToStart(ball1);
         };

         if ( (distanceToElementCenter(e, ball2) - ball2Radius) < 180 ) {
            moveTheBall(e, ball2);
         } else {
            moveToStart(ball2);
         };

         if ( (distanceToElementCenter(e, ball3) - ball3Radius) < 180 ) {
            moveTheBall(e, ball3);
         } else {
            moveToStart(ball3);
         };




         // console.log( `ball1 radius: ${ ball1Radius }` );   
         // console.log( `ball2 radius: ${ ball2Radius }` );   
         // console.log( `ball3 radius: ${ ball3Radius }` );
   
         // if (distanceToElementCenter(e, ball1) < 220) {
         // // ball1.cs
         // translate(e, ball1, distanceToElementCenter(e, ball1));
         // } else {
         // ball1.css('transform', 'translate(0px, 0px)');
         // }










         // stop any further events
         wait = true;
         // after a fraction of a second, allow events again
         setTimeout(function () {
            wait = false;
         }, 1000 / timesPerSecond);
      } 
   }).mouseleave(function() {
      moveToStart(ball1);
      moveToStart(ball2);
      moveToStart(ball3);
   });

   




});
})(jQuery);