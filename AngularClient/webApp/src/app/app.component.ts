import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    
  ]
})

export class AppComponent {
 

  constructor() {
  }

  slideNavToggle():void{
      $("body").toggleClass("sidenav-toggled");
      $(".navbar-sidenav").addClass("collapsed");
      $(".navbar-sidenav").removeClass("show");
  }

  navbarCollapse():void{
      $("#navbarResponsive").slideToggle('slow');
  }
}
