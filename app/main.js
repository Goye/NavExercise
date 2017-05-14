import Config from './js/config.js';
import Nav from './js/nav.js';
import Data from './js/data.js';
import styles from './sass/main.scss';

// Used an IIF to load data
( async () => {
    let dataNav = new Data();
    let cfg = new Config();
    dataNav = await dataNav.getJson(cfg.jsonPath);
    console.log('JSON DATA', dataNav);
    let myNav = new Nav(dataNav);
})();