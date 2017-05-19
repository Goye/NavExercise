
class Nav { 
  constructor(data) {
    this.root = document.querySelector('.main-nav-wrapper');
    this.closedButton = document.querySelector('.navbar-toggle-open');
    this.openedButton = document.querySelector('.navbar-toggle-close');
    this.header = document.querySelector('header');
    this.overlay = document.querySelector('.overlay');
    this.structure = this.buildNav(data);
  }

  buildNav(data, container) {   
    this.root.innerHTML = this.htmlCode(data);
    this.addMenuListeners();
    this.openedButton.addEventListener('click', () => this.buttonListener(event));
    this.closedButton.addEventListener('click', () => this.buttonListener(event));
  }

  htmlCode(data) {
    let rootElement = '';
    data.items.map((elem, index) => {
      if (elem.items.length > 0) {
        let children = this.htmlChildren(elem.items);
        rootElement += `<li class="has-children"><a href=${elem.url}>${elem.label}</a>${children}</li>`;
      } else {
        rootElement += `<li><a href=${elem.url}>${elem.label}</a></li>`;
      }
    });
    rootElement += `<li class="footer">&copy; 2017 Huge. All Rights Reserved</li>`;
    return rootElement;
  }

  htmlChildren(nodes) {
    let elements = '<ul class="submenu">';
   nodes.map((elem, index) => {
      elements += `<li><a href=${elem.url}>${elem.label}</a></li>`;
    });
    elements += '</ul>';
    return elements;
  }

  buttonListener(event) {    
    if (event.target.className.indexOf('navbar-toggle-open') !== -1) {
      this.navOpen();
    } else {
      event.target.classParams.navClose();
    }
  }

  addOutsideListener() {
    document.addEventListener('click', () => this.clickOutside(event));
  }

  navOpen() {
    this.header.classList.add('open');
    this.overlay.classList.add('show');    
  }

  navClose() {
    this.header.classList.remove('open');
    this.overlay.classList.remove('show');
  }

  clickOutside(event) {    
    const inside = document.querySelector('header').contains(event.target);
     if (!inside) {     
      this.navClose();
      this.closeAllMenus();
    }   
    document.removeEventListener('click', () => this.clickOutside(event));
  }

  addMenuListeners() {
    let menus = document.querySelectorAll('.has-children');
    menus.forEach(el => {
      el.addEventListener('click', () => this.submenuListener(event));
    });
  }

  submenuListener(event) {
    if (!event.target.parentNode.classList.contains('open')) {
      this.closeAllMenus();
      event.target.parentNode.classList.add('open');
      this.addOutsideListener();
    } else {
      event.target.parentNode.classList.remove('open');
    }
  }

  closeAllMenus() {
    let menus = document.querySelectorAll('.has-children');
    menus.forEach(el => {
      el.classList.remove('open');
    });
  }
 }

 export default Nav;