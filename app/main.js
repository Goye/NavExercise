import Config from './js/config.js';
import Nav from './js/nav.js';
import Data from './js/data.js';
import styles from './sass/main.scss';

/**
 * IIF Function to init app
 * Load data and build the Nav with the data loaded 
 */
( async () => {
    let dataNav = new Data();
    let configObj = new Config();
    dataNav = await dataNav.getJson(configObj.jsonPath);
    let hugeNav = new Nav(dataNav);
})();
