/** Class representing a Huge Object */
import Config from './config.js';
import Nav from './nav.js';
import Data from './data.js';

class Huge {
  /**
  * Represents a Huge init Class
  * @constructor
  */
  constructor() {
 
  }
  
  /**
  * Init the app, load the json data and build nav
  */
  async init ()  {
    let dataNav = new Data();
    let configObj = new Config();
    dataNav.getJson(configObj.jsonPath)
      .then(data => {
        let hugeNav = new Nav(data);
        hugeNav.buildNav();
      })
      .catch(err => {
        console.error();
      });
  }
}

export default Huge;

