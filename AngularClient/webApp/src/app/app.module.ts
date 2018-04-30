import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MembersModule } from './members/members.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeightPipe } from './pipes/weight.pipe';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MembersModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
