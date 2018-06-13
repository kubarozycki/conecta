import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MemberModel } from '../models/MemberModel';
@Injectable()
export class MembersService {
  
  constructor(private http: HttpClient) { }
  readonly url:string='http://localhost:3000/members/';
  readonly httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Auth':'NoAuth'
    })
  }
  getMembers() {
    return this.http.get(this.url);
  }

  addMember(member:MemberModel){
    return this.http.post<MemberModel>(this.url,member,this.httpOptions);
  }
}
