
class Nav { 
  constructor(data) {
    this.root = document.querySelector('.main-nav-wrapper');
    this.closedButton = document.querySelector('.navbar-toggle-open');
    this.openedButton = document.querySelector('.navbar-toggle-close');
    this.header = document.querySelector('header');
    this.structure = this.buildNav(data);
  }

  buildNav(data, container) {   
    this.root.innerHTML = this.htmlCode(data);
    this.addMenuListeners();
    this.openedButton.addEventListener('click', this.buttonListener);
    this.openedButton.classParams = this;
    this.closedButton.addEventListener('click', this.buttonListener);
    this.closedButton.classParams = this;
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
      event.target.classParams.header.classList.add('open');
    } else {
      event.target.classParams.header.classList.remove('open');
    }
  }

  addMenuListeners() {
    let menus = document.querySelectorAll('.has-children');
    menus.forEach(el => {
      el.addEventListener('click', this.submenuListener);
    });
  }

  submenuListener(event) {    
    if (this.className.indexOf('open') === -1) {
      this.classList.add('open');
    } else {
      this.classList.remove('open');
    }
  }

 }

 export default Nav;