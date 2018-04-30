import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../models/MemberModel'; 
@Component({
  selector: 'app-members-list',
  template: `
  
  <form class="form-inline position-sticky">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
  </form>
  <br>
  <table class="table table-hover table-bordered table-responsive">
  <thead class="thead-light">
    <th>Imię</th>
    <th>Nazwisko</th>
    <th>Wiek</th>
    <th>Wzrost</th>
    <th>Waga</th>
    <th>BF</th>
    <th style="width: 3%;"></th>
    <th style="width: 3%;"></th>
  </thead>
  <tbody>
    <tr *ngFor="let member of membersList" class='clickable-row' style="cursor:">
      <td>
          {{member.Name}}
      </td>
      <td>  
          {{member.Surname}}
      </td>
      <td>
          {{member.Age}}
      </td>
      <td>
          {{member.Height | height}}
      </td>
      <td>
          {{member.Weight | weight }}
      </td>
      <td>
          {{member.BF | percent:'1.1-5'}}
      </td>
      <td>
        <button type="button" class="btn btn-default">
          <i class="fas fa-edit"></i>
        </button>
      </td>
      <td>
        <button type="button" class="btn btn-default">
          <i class="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
</table>
  
    
  `,
  styles: []
})
export class MembersListComponent implements OnInit {
  membersList:MemberModel[];
  constructor() { }

  ngOnInit() {
    this.membersList=[];
    let i=0;
    while(i<11){
        this.membersList.push(new MemberModel("Jan","kowalski",14,80,182,0.256));
        i++;
    }
  }

}
