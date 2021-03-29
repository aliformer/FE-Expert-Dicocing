Feature('Test Hunger App');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });

Scenario('Favorite Page', ({ I }) => {
    I.seeElement('main');
    I.see('', 'main')    
});

Before(({ I }) => {
    I.amOnPage('/#');
  });
  
Scenario('Do Search', ({ I }) => {    
    I.seeElement('search-bar');
    I.click(locate('.searchbar'))
    I.type('bali')
    I.click(locate('search-bar button'))
    I.seeElement('restaurant-item')
    I.click(locate('restaurant-item a').at(1));
    I.seeElement('.category')    
});
 
Scenario('Add to Favorite then remove it', async ({ I }) => {
    I.amOnPage('/#');
    const restaurantName = [];
 
    for (let i = 1; i <= 3; i++) {
      I.click(locate('restaurant-item a').at(i));
      I.seeElement('#bookmarkButton');
      I.click('#bookmarkButton');
      restaurantName.push(await I.grabTextFrom('detail-item a'));
      I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('main');
    for (let i = 0 ; i < restaurantName.length ; i++){
        I.seeElement('restaurant-item a');
        I.see(`${restaurantName[i]}`, 'restaurant-item a')
    }

    for (let i = 1; i <= 3 ; i++) { 
        I.click(locate('restaurant-item a').at(1));   
        I.seeElement('#deleteButton');
        I.click('#deleteButton');      
        I.amOnPage('/#/favorite');
      }
      I.amOnPage('/#/favorite');
      I.seeElement('main');
      I.see('', 'main')
});


