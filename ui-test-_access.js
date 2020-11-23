const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKStandardView: '.OLSKStandardView',
	
	OLSKStandardViewHead: '.OLSKStandardViewHead',
	
	OLSKStandardViewBody: '.OLSKStandardViewBody',
	
	OLSKStandardViewTail: '.OLSKStandardViewTail',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKStandardView_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKStandardView', function () {
		browser.assert.elements(OLSKStandardView, 1);
	});

	it('hides OLSKStandardViewHead', function () {
		browser.assert.elements(OLSKStandardViewHead, 0);
	});

	it('hides OLSKStandardViewBody', function () {
		browser.assert.elements(OLSKStandardViewBody, 0);
	});

	it('hides OLSKStandardViewTail', function () {
		browser.assert.elements(OLSKStandardViewTail, 0);
	});

	context('OLSKStandardViewHead', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				TestOLSKStandardViewHead: true,
			});
		});

		it('shows OLSKStandardViewHead', function () {
			browser.assert.elements(OLSKStandardViewHead, 1);
		});
	
	});

	context('OLSKStandardViewBody', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				TestOLSKStandardViewBody: true,
			});
		});

		it('shows OLSKStandardViewBody', function () {
			browser.assert.elements(OLSKStandardViewBody, 1);
		});
	
	});

	context('OLSKStandardViewTail', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				TestOLSKStandardViewTail: true,
			});
		});

		it('shows OLSKStandardViewTail', function () {
			browser.assert.elements(OLSKStandardViewTail, 1);
		});
	
	});

});
