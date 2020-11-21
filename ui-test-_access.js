const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKStandardView: '.OLSKStandardView',
	
	OLSKStandardViewToolbarHead: '.OLSKStandardViewToolbarHead',
	
	OLSKStandardViewBody: '.OLSKStandardViewBody',
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

	it('hides OLSKStandardViewToolbarHead', function () {
		browser.assert.elements(OLSKStandardViewToolbarHead, 0);
	});

	it('hides OLSKStandardViewBody', function () {
		browser.assert.elements(OLSKStandardViewBody, 0);
	});

	context('OLSKStandardViewToolbarHead', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				TestOLSKStandardViewToolbarHead: true,
			});
		});

		it('shows OLSKStandardViewToolbarHead', function () {
			browser.assert.elements(OLSKStandardViewToolbarHead, 1);
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

});
