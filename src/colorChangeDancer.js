var colorChangeDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = ($('<img class="colorChangeDancer" src="colorDancer.gif">'));
  makeDancer.call(this, top, left, timeBetweenSteps);
};

colorChangeDancer.prototype = Object.create(makeDancer.prototype);
colorChangeDancer.prototype.constructor = colorChangeDancer;

colorChangeDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.css('border-color', 'rgb(' + this._randomColor() + ', ' + this._randomColor() + ', ' + this._randomColor() + ')');
};

colorChangeDancer.prototype._randomColor = function() {
  return Math.floor(Math.random() * 256);
};