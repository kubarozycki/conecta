import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';
import { HeightPipe } from '../pipes/height.pipe';
import { WeightPipe } from '../pipes/weight.pipe';
import { MembersAddComponent } from './members-add/members-add.component';
import { FormsModule  } from '@angular/forms';
import { MembersService } from '../services/members.service';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MembersListComponent,HeightPipe,WeightPipe, MembersAddComponent],
  providers: [MembersService]
})
export class MembersModule { }
