var colorChangeDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;

  makeDancer.call(this, top, left, timeBetweenSteps);
};

colorChangeDancer.prototype = Object.create(makeDancer.prototype);
colorChangeDancer.prototype.constructor = colorChangeDancer;

colorChangeDancer.prototype.step = function() { 
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);

  // var changeColor = {
  //   color: rgb(this._randomColor(), this._randomColor(), this._randomColor())
  // };
  var $elem = this.$node;
  this.$node.css('border-color', 'rgb(' + this._randomColor() + ', ' + this._randomColor() + ', ' + this._randomColor() + ')');

  // setInterval(function() {

  //   $elem.animate({'border-color': 'yellow'}, 300)
  //             .animate({'border-color': 'orange'}, 300);
  // }, 100);
};

colorChangeDancer.prototype._randomColor = function() {
  return Math.floor(Math.random() * 256);
};