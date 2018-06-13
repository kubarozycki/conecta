import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../models/MemberModel'; 
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-members-list',
  templateUrl:'./members-list.component.html',
  styles: []
})
export class MembersListComponent implements OnInit {
  membersList:MemberModel[];
  constructor(
    private membersService:MembersService
  ) { }

  ngOnInit() {
    this.membersList=[];
    let i=0;
    while(i<11){
        this.membersList.push(new MemberModel("Jan","kowalski",14,80,182,0.256));
        i++;
    }
    this.membersService.getMembers()
                       .subscribe((data:any)=>{
                         console.log(data);
                          this.membersList=data.map((x)=>{
                            console.log(x);
                            return new MemberModel(x.first_name,x.last_name);
                          })
                       });
  }

}
