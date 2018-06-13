import { Length, MaxLength } from 'class-validator';
function xxx(arg: number)
{
    function f(target:any)
    {
    }
    return f
}


export class Member{


    Surname?: string;

    
    @xxx(1)
    Name?: string;
    
    constructor(Name?:string,Surname?:string) {
        this.Surname=Surname;
        this.Name=Name;
    }
}