const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKStandardView_Misc', function () {	

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			TestOLSKStandardViewHead: true,
			TestOLSKStandardViewBody: true,
		});
	});
	
	describe('OLSKStandardViewHead', function test_OLSKStandardViewHead () {
		
		it('classes OLSKMobileViewHeader', function () {
			browser.assert.hasClass(OLSKStandardViewHead, 'OLSKMobileViewHeader');
		});

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(OLSKStandardViewHead, 'OLSKToolbar');
		});

		it('binds OLSKStandardViewHead', function () {
			browser.assert.text(OLSKStandardViewHead, 'TestOLSKStandardViewHead');
		});

	});
	
	describe('OLSKStandardViewBody', function test_OLSKStandardViewBody () {
		
		it('binds OLSKStandardViewBody', function () {
			browser.assert.text(OLSKStandardViewBody, 'TestOLSKStandardViewBody');
		});

	});
	
});
