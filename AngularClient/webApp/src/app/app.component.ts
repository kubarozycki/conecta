import { Component } from '@angular/core';
import * as $ from 'jquery';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    
  ]
})

export class AppComponent {


  slideNavToggle():void{
      $("body").toggleClass("sidenav-toggled");
      $(".navbar-sidenav").addClass("collapsed");
      $(".navbar-sidenav").removeClass("show");
  }

  navbarCollapse():void{
      $("#navbarResponsive").slideToggle('slow');
  }
}
