const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKStandardView_Misc', function () {	

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			TestOLSKStandardViewHead: true,
			TestOLSKStandardViewBody: true,
			TestOLSKStandardViewTail: true,
		});
	});
	
	describe('OLSKStandardView', function test_OLSKStandardView () {
		
		it('classes OLSKDecorFixed', function () {
			return browser.assert.hasClass(OLSKStandardView, 'OLSKDecorFixed');
		});

	});
	
	describe('OLSKStandardViewHead', function test_OLSKStandardViewHead () {
		
		it('classes OLSKDecorFixedHeader', function () {
			return browser.assert.hasClass(OLSKStandardViewHead, 'OLSKDecorFixedHeader');
		});

		it('binds OLSKStandardViewHead', function () {
			return browser.assert.text(OLSKStandardViewHead, 'TestOLSKStandardViewHead');
		});

	});
	
	describe('OLSKStandardViewBody', function test_OLSKStandardViewBody () {

		it('classes OLSKDecorFixedSecondary', function () {
			return browser.assert.hasClass(OLSKStandardViewBody, 'OLSKDecorFixedSecondary');
		});
		
		it('binds OLSKStandardViewBody', function () {
			return browser.assert.text(OLSKStandardViewBody, 'TestOLSKStandardViewBody');
		});

	});

	describe('OLSKStandardViewTail', function test_OLSKStandardViewTail () {
		
		it('binds OLSKStandardViewTail', function () {
			return browser.assert.text(OLSKStandardViewTail, 'TestOLSKStandardViewTail');
		});

	});
	
});
