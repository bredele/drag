
/**
 * Fluid resistance
 * (air by default).
 * 
 * @api public
 */

module.exports = function(velocity, coefficient, area, rho) {
	rho = rho || 1.22;
	return (rho * velocity * velocity * coefficient * area) * 0.5;
};
