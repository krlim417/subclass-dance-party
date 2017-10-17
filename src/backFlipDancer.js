var backFlipDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

backFlipDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  var $elem = this.$node;
  $({deg: 0}).animate({deg: 360}, {
    duration: 700,
    step: function() {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
      $elem.css({
        transform: rotate(deg)
      });
    }
  });
};