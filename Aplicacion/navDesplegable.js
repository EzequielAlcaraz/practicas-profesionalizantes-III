
class NavDesplegableController
{
    constructor(view)
    {
        this.innerView = view;
    }
}

class NavDesplegable extends HTMLElement
{
    constructor()
    {
        super();
        this.barNav = document.createElement('nav');
        this.barNav.classList.add('w3-sidebar', 'w3-bar-block', 'w3-collapse', 'w3-animate-left', 'w3-card');
        this.barNav.classList.add('w3-bar-nav-default-style');
        this.appendChild(this.barNav);
    }

    addButtonImage()
    {
        let buttonImage = document.createElement('a');
        buttonImage.classList.add('w3-bar-item', 'w3-button', 'w3-border-bottom', 'w3-large');
        buttonImage.classList.add('w3-bar-nav-image-default-style')
        this.barNav.appendChild(buttonImage);
        return buttonImage;
    }

    addItem()
    {
        let item = document.createElement('a');
        item.classList.add('w3-bar-item', 'w3-button');
        this.barNav.appendChild(item);
        return item;
    }


}

customElements.define('x-nav-desplegable', NavDesplegable);

export {NavDesplegable};

{/* <nav class="w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card" style="z-index: 3; width: 250px; display: none;" id="mySidebar">
      <a class="w3-bar-item w3-button w3-border-bottom w3-large" href="#"><img src="https://www.w3schools.com/images/w3schools.png" style="width:80%;"></a>
      <a class="w3-bar-item w3-button w3-hide-large w3-large" href="javascript:void(0)" onclick="w3_close()">Close <i class="fa fa-remove"></i></a>
      <a class="w3-bar-item w3-button w3-teal" href="#">Home</a>
      <a class="w3-bar-item w3-button" href="#">Link 1</a>
      <a class="w3-bar-item w3-button" href="#">Link 2</a>
      <a class="w3-bar-item w3-button" href="#">Link 3</a>
      <a class="w3-bar-item w3-button" href="#">Link 4</a>
      <a class="w3-bar-item w3-button" href="#">Link 5</a>
      <div>
        <a class="w3-bar-item w3-button" onclick="myAccordion('demo')" href="javascript:void(0)">Dropdown <i class="fa fa-caret-down"></i></a>
        <div id="demo" class="w3-hide ">
          <a class="w3-bar-item w3-button" href="#">Link</a>
          <a class="w3-bar-item w3-button" href="#">Link</a>
          <a class="w3-bar-item w3-button" href="#">Link</a>
        </div>
      </div>
    </nav> */}