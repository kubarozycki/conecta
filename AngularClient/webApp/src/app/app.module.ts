import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MembersModule } from './members/members.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { WeightPipe } from './pipes/weight.pipe';
import {NgForm} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatSidenavContainer,MatSidenav, MatNavList,MatSidenavContent,MatListItem} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MembersModule,
    // MatSidenavContainer,MatSidenav, MatNavList,MatSidenavContent,MatListItem
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
