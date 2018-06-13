export class MemberModel{
    Name?:string;
    Surname?:string;
    Age?:number;
    Weight?:number;
    Height?:number;
    BF?:number;
    
    constructor(name?:string,surname?:string,age?:number,weight?:number,height?:number,bf?:number) {
        this.Name=name;
        this.Surname=surname;
        this.Age=age;
        this.Weight=weight;
        this.Height=height;
        this.BF=bf;
    }
}