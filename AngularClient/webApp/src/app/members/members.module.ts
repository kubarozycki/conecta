import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';
import { HeightPipe } from '../pipes/height.pipe';
import { WeightPipe } from '../pipes/weight.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MembersListComponent,HeightPipe,WeightPipe]
})
export class MembersModule { }
