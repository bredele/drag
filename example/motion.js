
/**
 * Example dependency.
 */

var drag = require('..');


/**
 * Kick button and
 * listener.
 */

var btn = document.querySelector('.kick');
btn.addEventListener('click', kick);


/**
 * Default ball
 * position.
 */

var x = 240;
var y = 200;


/**
 * [kick description]
 * @return {[type]} [description]
 */

function kick() {

}

/**
 * Set ball position.
 * 
 * @param  {Number} x
 * @param  {Number} y
 * @api private
 */

function position(x, y) {
	btn.setAttribute('style', 'top:; left:;');
}