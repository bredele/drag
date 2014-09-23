
/**
 * Module dependencies.
 */

var density = require('air')(293.15);


/**
 * Fluid resistance
 * (20 °C dray air by default).
 *
 * @param {m·s−2} velocity
 * @param {dimensionless} coefficient
 * @param {m2} area
 * @param {kg·m−3} rho 
 * @return {kg.s-1}
 * @api public
 */

module.exports = function(velocity, coefficient, area, rho) {
	rho = rho || density;
	return (rho * velocity * velocity * coefficient * area) * 0.5;
};
