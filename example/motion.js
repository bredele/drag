
/**
 * Example dependency.
 */

var drag = require('..');


/**
 * Ball element
 */

var ball = document.querySelector('.ball');

/**
 * Kick button and
 * listener.
 */

var btn = document.querySelector('.kick');
btn.addEventListener('click', function() {
	requestAnimationFrame(move);

});

/**
 * Ball dimensions,drag 
 * coefficient and area.
 */

var cd = 0.47;
var radius = 15;
var area = 0.0001 * Math.PI * radius * radius;
var mass = 0.1;

/**
 * Collision restitution.
 */

var restitution =  - 0.7;


/**
 * Gravity forces
 * on earth.
 */

var ag = 9.81;

/**
 * Viewport size
 */

var width = window.innerWidth;
var height = window.innerHeight;


/**
 * Default ball
 * position.
 */

var x = 240;
var y = 200;

/**
 * Default velocity.
 */

var vx = 10;
var vy = 0;

function abs(val) {
  return val / Math.abs(val) || 1;
}

/**
 * [kick description]
 * @return {[type]} [description]
 */

function move() {
	var fx = - drag(vx, cd, area) * abs(vx);
	var fy = - drag(vy, cd, area) * abs(vy);

  var t = 1 / 60;

	var ax = fx / mass;
	var ay =  ag + fy /mass;

	vx += ax * t;
	vy += ay * t;
  

	x += vx * t * 200;
	y += vy * t * 200;

	if ( y > height - 2 * radius) {
		vy *= restitution;
	  y = height - 2 * radius;
	}

	if (x > width - 2 * radius) {
		vx *= restitution;
		x = width - 2 * radius;
	}

	if (x < radius) {
		vx *= restitution;
		x = radius;
    
  }
  position();
	requestAnimationFrame(move);
}


/**
 * Random velocity.
 * (between 5 and 15 m.s-1)
 * 
 * @return {Number}
 * @api private
 */

function random() {
	var max = 75;
	var min = 5;
  return Math.random() * (max - min) + min;
}



/**
 * Set ball position.
 * 
 * @param  {Number} x
 * @param  {Number} y
 * @api private
 */

function position(left, top) {
	//ball.setAttribute('style', '-webkit-transform:translate3d(' + left + 'px,' + top + 'px,0px)');
	ball.setAttribute('style', 'top:' + y + 'px; left:' + x + 'px;');
}

