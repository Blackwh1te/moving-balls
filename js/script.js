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

   // Distance between element and cursor:
   function posX(e, el) {
      return Math.round( (el.offset().left + el.width() / 2) );
   };

   // Distance between element and cursor:
   function posY(e, el) {
      return Math.round( (el.offset().top + el.height() / 2) );
   };

   function moveTheBall(e, el) {
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

   let timesPerSecond = 25; // how many times to fire the event per second
   let wait = false;
   // Отслеживание позиции курсора мыши в области расположения шаров:
   $('.field').mousemove(function (e) {
      // don't handle events when one has just occurred
      if (!wait) {
         
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