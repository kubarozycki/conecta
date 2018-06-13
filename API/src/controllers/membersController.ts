import {Request,Response} from 'express';

import {MembersRepository} from "../DAL/concrete/MembersRepository";
import { Member } from '../models/member';
import { validate, ValidationError } from 'class-validator';

module.exports.get = function (request: Request, response: Response) {
        new MembersRepository().get()
       .then((x)=>{
             response.send(x);
       })
       .catch((err)=>{
             response.sendStatus(500);  
       })
       
}


module.exports.post = function(request: Request, response: Response){
            // console.log(JSON.parse(request.body));
            let reqBody:Member=new Member();
            reqBody=request.body;
            validate(reqBody).then((errors:ValidationError[])=>{
                  console.log(errors);
            });
            console.log(reqBody);
      }