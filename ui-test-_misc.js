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
			browser.assert.hasClass(OLSKStandardView, 'OLSKDecorFixed');
		});

	});
	
	describe('OLSKStandardViewHead', function test_OLSKStandardViewHead () {
		
		it('classes OLSKDecorFixedHeader', function () {
			browser.assert.hasClass(OLSKStandardViewHead, 'OLSKDecorFixedHeader');
		});

		it('binds OLSKStandardViewHead', function () {
			browser.assert.text(OLSKStandardViewHead, 'TestOLSKStandardViewHead');
		});

	});
	
	describe('OLSKStandardViewBody', function test_OLSKStandardViewBody () {

		it('classes OLSKDecorFixedSecondary', function () {
			browser.assert.hasClass(OLSKStandardViewBody, 'OLSKDecorFixedSecondary');
		});
		
		it('binds OLSKStandardViewBody', function () {
			browser.assert.text(OLSKStandardViewBody, 'TestOLSKStandardViewBody');
		});

	});

	describe('OLSKStandardViewTail', function test_OLSKStandardViewTail () {
		
		it('binds OLSKStandardViewTail', function () {
			browser.assert.text(OLSKStandardViewTail, 'TestOLSKStandardViewTail');
		});

	});
	
});
