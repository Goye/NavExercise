"use strict";
/** Class representing a Nav */
class Nav {
 /**
 * Represents a Nav
 * @constructor
 * @param  {Object} data - Json Object with Nav Data
 */
  constructor(data) {
    this.htmlData = {
      root: document.querySelector('.main-nav-wrapper'),
      openClass: 'navbar-toggle-open',
      closeClass: 'navbar-toggle-close',
      childrenClass: 'has-children',
      submenuClass: 'submenu',
      data: data
    };
  }

  initHtmlElements() {
    this.htmlData.nav = document.querySelector('.main-nav');
    this.htmlData.toggleButtonOpen = document.querySelector('.navbar-toggle-open');
    this.htmlData.toggleButtonClose = document.querySelector('.navbar-toggle-close');
    this.htmlData.header = document.querySelector('header');
    this.htmlData.overlay = document.querySelector('.overlay');
    this.htmlData.allLinks = document.querySelectorAll('a');
    this.htmlData.menuParents = document.querySelectorAll('.has-children');
    return this.htmlData;
  }

  /**
  * BuildNav Function
  * Build the nav structure and assign listeners
  */
  buildNav() {
    this.htmlData.root.innerHTML = this.htmlCode(this.htmlData.data);
    this.initHtmlElements();
    this.addMenuListeners();
    this.htmlData.toggleButtonOpen.addEventListener('click', () => this.buttonListener(event));
    this.htmlData.toggleButtonClose.addEventListener('click', () => this.buttonListener(event));
  }

  /**
  * HtmlCode
  * Create parents Html template elements and assign classes
  * @return {Object} Html element with the nav
  */
  htmlCode(data) {
    let rootElement = '';
    data.items.map((elem, index) => {
      if (elem.items.length > 0) {
        let children = this.htmlChildren(elem.items);
        rootElement += `<li class=${this.htmlData.childrenClass}>
        <a href=${elem.url}>${elem.label}</a>${children}</li>`;
      } else {
        rootElement += `<li><a href=${elem.url} target="_blank">${elem.label}</a></li>`;
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
    let elements = `<ul class=${this.htmlData.submenuClass}>`;
   nodes.map((elem, index) => {
      elements += `<li><a href=${elem.url} target="_blank">${elem.label}</a></li>`;
    });
    elements += `</ul>`;
    return elements;
  }

  /**
  * buttonListener
  * Assign listeners to menu buttons, open and close nav
  * @param  {Object} event - Captured event
  */
  buttonListener(event) {
    const closestButton = event.target.closest('button');
    if (closestButton.classList.contains(this.htmlData.openClass)) {
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
    const inside = this.htmlData.nav.contains(event.target);
    const openButton = this.htmlData.toggleButtonOpen.contains(event.target);
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
    this.htmlData.header.classList.add('open');
    this.htmlData.overlay.classList.add('show');
  }

  /**
  * navOpen
  * Close nav menu
  */
  navClose() {
    this.htmlData.header.classList.remove('open');
    this.htmlData.overlay.classList.remove('show');
    this.closeAllMenus();
  }

  /**
  * addMenuListeners
  * Assign event listeners to each menu that has children
  */
  addMenuListeners() {
    this.htmlData.menuParents.forEach(el => {
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
      event.target.setAttribute('aria-current', 'page');
      event.target.parentNode.classList.add('open');
    } else {
      event.target.parentNode.classList.remove('open');
      event.target.removeAttribute('aria-current', 'page');
    }
  }

  /**
  * closeAllMenus
  * Close all menus open
  */
  closeAllMenus() {
    this.htmlData.menuParents.forEach(el => {
      el.classList.remove('open');    
    });

    this.htmlData.allLinks.forEach(el => {
      el.removeAttribute('aria-current');
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
