import { IMembersRepository } from "../abstraction/IMembersRepository";
import { Member } from "../../models/member";
import { resolve } from "dns";
import { QueryResult, Query } from 'pg';
var { Client, Pool } = require('pg')



export class MembersRepository implements IMembersRepository {

    //todo get from some config file?
    readonly pool = new Pool(
    {
            user: 'postgres',
            host: 'localhost',
            database: 'fitConnect',
            password: 'Plqaokws777',
            port: 5432,
    });

    get(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.pool.connect()
                .then((client: any) => {
                    client.query("select * from members")
                        .then((result: QueryResult) => {
                            client.release();
                            resolve(result.rows);
                        })
                        .catch((err: QueryResult) => {
                            client.release();
                            console.log("error")
                            reject(500);
                        })
                        
                })
                .catch((err: any) => {
                    console.log(err);
                    reject(500);
                })

        })

    }
}