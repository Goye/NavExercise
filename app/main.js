
import Nav from './js/nav.js';
import Data from './js/data.js';
import styles from './sass/main.scss';

// Used an IIF to load data
( async () => {
    let dataNav = new Data();
    dataNav = await dataNav.getJson('./data/nav.json');
    console.log('JSON DATA', dataNav);
    let myNav = new Nav();
    myNav.hello();
})();