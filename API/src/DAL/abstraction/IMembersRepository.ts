import { Member } from "../../models/member";

export interface IMembersRepository{
    get():Promise<Member[]>;
}