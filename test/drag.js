
/**
 * Test dependencies.
 */

var assert = require('assert');
var drag = require('..');
var round = require('round');


describe("drag forces", function() {

	describe('dry air', function() {

		describe("ball", function() {

			var area = 0.0001 * Math.PI * 15 * 15;

			it('velocity 10 m.s-2', function() {
				assert.equal(round(drag(10, 0.47, area), 6), 2.000126);

			});
		});
		
	});
});
