describe('divers tests web', function() {

  it('should good view data of BDD', function() {
    browser.get('http://localhost:8081');

browser.driver.findElement(by.id('customers'));
expect('donnée web').toEqual('donnée de la bdd');

browser.driver.findElement(by.xpath('//id="customer"'));
expect('donnée web').toEqual('donnée de la bdd');
  });
});
