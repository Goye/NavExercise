
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
    //this.root.addEventListener();
    this.openedButton.addEventListener('click', this.buttonListener);
    this.closedButton.addEventListener('click', this.buttonListener);
  }

  htmlCode(data) {
    return '<li></li>';
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