import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../models/MemberModel';
import {NgForm} from '@angular/forms';
import { MembersService } from '../../services/members.service';
@Component({
  selector: 'app-members-add',
  templateUrl:'./members-add.component.html',
  styles: []
})
export class MembersAddComponent implements OnInit {

  model:MemberModel=new MemberModel();
  constructor(private service:MembersService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);  // false
    this.service.addMember(this.model)
    .subscribe((data:any)=>{
      console.log(data);
    })
  }

}
