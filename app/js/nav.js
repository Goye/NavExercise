
class Nav { 
  constructor(data) {
    this.root = document.querySelector('.main-nav-wrapper');
    this.closedButton = document.querySelector('.navbar-toggle-open');
    this.openedButton = document.querySelector('.navbar-toggle-close');
    this.structure = this.buildNav(data);
  }

  buildNav(data, container) {
    console.log('root', this.root);
    
    this.root.innerHTML = this.htmlCode(data);
    console.log(this.root);
    //this.root.addEventListener();
    this.openedButton.addEventListener('click', this.buttonListener);
    this.closedButton.addEventListener('click', this.buttonListener);
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
    rootElement += `<div class="footer">&copy; 2017 Huge. All Rights Reserved</div>`;
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
    if (event.target.className.indexOf('navbar-toggle-open') != -1) {
      this.showMobileMenu();
    } else {
      this.closeMobileMenu();
    }
  }
  
  showMobileMenu() {
    
  }

  closeMobileMenu() {
    
  }
 }

 export default Nav;