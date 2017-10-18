var spinDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = ($('<img class="spinDancer" src="spinDancer.gif">'));
  makeDancer.call(this, top, left, timeBetweenSteps);
};

spinDancer.prototype = Object.create(makeDancer.prototype);
spinDancer.prototype.constructor = colorChangeDancer;

// spinDancer.prototype.step = function() { 
//   makeDancer.prototype.step.call(this, this.timeBetweenSteps);
// };

// spinDancer.prototype._randomColor = function() {
//   return Math.floor(Math.random() * 256);
// };