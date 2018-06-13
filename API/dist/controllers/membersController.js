"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MembersRepository_1 = require("../DAL/concrete/MembersRepository");
const member_1 = require("../models/member");
const class_validator_1 = require("class-validator");
module.exports.get = function (request, response) {
    new MembersRepository_1.MembersRepository().get()
        .then((x) => {
        response.send(x);
    })
        .catch((err) => {
        response.sendStatus(500);
    });
};
module.exports.post = function (request, response) {
    // console.log(JSON.parse(request.body));
    let reqBody = new member_1.Member();
    reqBody = request.body;
    class_validator_1.validate(reqBody).then((errors) => {
        console.log(errors);
    });
    console.log(reqBody);
};
