"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var { Client, Pool } = require('pg');
class MembersRepository {
    constructor() {
        //todo get from some config file?
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'fitConnect',
            password: 'Plqaokws777',
            port: 5432,
        });
    }
    get() {
        return new Promise((resolve, reject) => {
            this.pool.connect()
                .then((client) => {
                client.query("select * from members")
                    .then((result) => {
                    client.release();
                    resolve(result.rows);
                })
                    .catch((err) => {
                    client.release();
                    console.log("error");
                    reject(500);
                });
            })
                .catch((err) => {
                console.log(err);
                reject(500);
            });
        });
    }
}
exports.MembersRepository = MembersRepository;
