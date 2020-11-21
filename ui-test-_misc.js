const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKStandardView_Misc', function () {	

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			TestOLSKStandardViewToolbarHead: true,
			TestOLSKStandardViewBody: true,
		});
	});
	
	describe('OLSKStandardViewToolbarHead', function test_OLSKStandardViewToolbarHead () {
		
		it('classes OLSKMobileViewHeader', function () {
			browser.assert.hasClass(OLSKStandardViewToolbarHead, 'OLSKMobileViewHeader');
		});

		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(OLSKStandardViewToolbarHead, 'OLSKToolbar');
		});

		it('binds OLSKStandardViewBody', function () {
			browser.assert.text(OLSKStandardViewToolbarHead, 'TestOLSKStandardViewToolbarHead');
		});

	});
	
	describe('OLSKStandardViewBody', function test_OLSKStandardViewBody () {
		
		it('binds OLSKStandardViewBody', function () {
			browser.assert.text(OLSKStandardViewBody, 'TestOLSKStandardViewBody');
		});

	});
	
});
