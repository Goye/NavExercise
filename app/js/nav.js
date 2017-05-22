/** Class representing a Nav */
class Nav { 
 /**
 * Represents a Nav
 * @constructor
 * @param  {Object} data - Json Object with Nav Data
 */
  constructor(data) {
    this.root = document.querySelector('.main-nav-wrapper');
    this.toggleButtonOpen = document.querySelector('.navbar-toggle-open');
    this.toggleButtonClose = document.querySelector('.navbar-toggle-close');
    this.header = document.querySelector('header');
    this.overlay = document.querySelector('.overlay');
    this.data = data;
    this.structure = this.buildNav();
  }

  /**
  * BuildNav Function
  * Build the nav structure and assign listeners
  */
  buildNav() {   
    this.root.innerHTML = this.htmlCode();
    this.addMenuListeners();
    this.toggleButtonOpen.addEventListener('click', () => this.buttonListener(event));
    this.toggleButtonClose.addEventListener('click', () => this.buttonListener(event));
  }
  
  /**
  * HtmlCode
  * Create parents Html template elements and assign classes 
  * @return {Object} Html element with the nav
  */
  htmlCode() {
    let rootElement = '';
    this.data.items.map((elem, index) => {
      if (elem.items.length > 0) {
        let children = this.htmlChildren(elem.items);
        rootElement += `<li class="has-children">
        <a href=${elem.url}>${elem.label}</a>${children}</li>`;
      } else {
        rootElement += `<li><a href=${elem.url}>${elem.label}</a></li>`;
      }
    });
    rootElement += `<li class="footer">&copy; 2017 Huge. All Rights Reserved</li>`;
    return rootElement;
  }
 
  /**
  * HtmlChildren
  * Create submenu 
  * @param  {Object} nodes - Json Object with Submenu data
  * @return {Object} Html element with submenu
  */
  htmlChildren(nodes) {
    let elements = '<ul class="submenu">';
   nodes.map((elem, index) => {
      elements += `<li><a href=${elem.url}>${elem.label}</a></li>`;
    });
    elements += '</ul>';
    return elements;
  }
  
  /**
  * buttonListener
  * Assign listeners to menu buttons, open and close nav
  * @param  {Object} event - Captured event
  */
  buttonListener(event) {
    const closestButton = event.target.closest('button');
    if (closestButton.classList.contains('navbar-toggle-open')) {
      this.navOpen();
    } else  {
      this.navClose();
    }
  }

  /**
  * clickOutside
  * Detect click outside menu and closes the nav
  * @param  {Object} event - Captured event
  */
  clickOutside(event) {    
    const inside = document.querySelector('.main-nav').contains(event.target);
    const openButton = this.toggleButtonOpen.contains(event.target);
     if ((!inside) && (!openButton)) {
      this.navClose();
      this.closeAllMenus();
    }   
    document.removeEventListener('click', () => this.clickOutside(event));
  }
  
  /**
  * addOutsideListener
  * Assign event listener to click and call the function
  * @param  {Object} event - Captured event
  */
  addOutsideListener() {
    document.addEventListener('click', () => this.clickOutside(event));
  }
 
  /**
  * navOpen
  * Open nav menu
  */
  navOpen() {
    this.header.classList.add('open');
    this.overlay.classList.add('show'); 
  }
  
  /**
  * navOpen
  * Close nav menu
  */
  navClose() {
    this.header.classList.remove('open');
    this.overlay.classList.remove('show');
    this.closeAllMenus();
  }

  /**
  * addMenuListeners
  * Assign event listeners to each menu that has children
  */
  addMenuListeners() {
    let menus = document.querySelectorAll('.has-children');
    menus.forEach(el => {
      el.addEventListener('click', () => this.submenuListener(event));
    });
    window.addEventListener('resize', () => this.checkScreenSize(event));
    this.addOutsideListener();
    
  }
  
  /**
  * submenuListener
  * Callback to open and close the submenu 
  */
  submenuListener(event) {
    if (!event.target.parentNode.classList.contains('open')) {
      this.closeAllMenus();
      event.target.parentNode.classList.add('open');
    } else {
      event.target.parentNode.classList.remove('open');
    }
  }
  
  /**
  * closeAllMenus
  * Close all menus open
  */
  closeAllMenus() {
    let menus = document.querySelectorAll('.has-children');
    menus.forEach(el => {
      el.classList.remove('open');
    });
  }
   
   /**
  * checkScreenSize
  * Verify if screen is > 768 and close the menus
  */
  checkScreenSize() {
   if (window.innerWidth > 768) {
     this.navClose();
   }
  }
 }

 export default Nav;