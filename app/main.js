
import Nav from './nav.js';

class Main {
  constructor() {
    console.log('HI');
    console.log('HI', Nav);
    let myNav = new Nav();
    myNav.hello();
  }
}

let m = new Main();