describe('earthquake occurence', function() {
    it('should display many marks on google map', function() {
        browser.get('http://localhost:4000/');
        expect(element.all(by.css('marker')).count()).toBeGreaterThan(0);
    });

    it('should contain api data but not displayed on screen', function() {
        browser.get('http://localhost:4000/');
        expect(element.all(by.repeater('data in eqdata')).first().isDisplayed()).toBe(false);
        expect(element.all(by.repeater('data in eqdata')).first().isPresent()).toBe(true);
    });
});