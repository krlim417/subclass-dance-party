var shuffleDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="shuffleDancer" src="theFlash.gif">');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

shuffleDancer.prototype = Object.create(makeDancer.prototype);
shuffleDancer.prototype.constructor = shuffleDancer;
shuffleDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  //makeDancer.prototype.setPosition.call(this, this.top, this.left + 40);

  var move = function(first) {
    first.animate({'left': '100%'}, 3000, 'linear', function() {
      first.css('left', '100%');
      move(first);
    });
  };
  move(this.$node);
};