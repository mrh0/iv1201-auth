import mongoose = require("mongoose");
import bcrypt = require("bcrypt");
import {LoginCredentials, User} from "../model/types";
import { UserSchema } from "../model/schemas";

async function createUser(/*...*/) {
    if(await userExist(/*...*/))
        throw "username taken";

    let salt = await bcrypt.genSalt();
    let hpwd = await bcrypt.hash(process.env.PEPPER + /*password...*/, salt);

    let id = new mongoose.Types.ObjectId();
    return await new UserSchema({_id: id, /*...*/}).save()
}

async function getUser(/*...*/) {
    let r = await UserSchema.find()
    .where(/*...*/).equals(login).select(/*...*/).exec();

    if(r.length == 0)
        throw "not found";
    return {
        _id: r[0].get("_id"),
        /*...*/
    } as User;
}

async function userExist(/*...*/) {
    let r = await UserSchema.find()
    .where(/*...*/).equals(/*...*/).select('_id').exec();

    if(r.length == 1)
        return true;
    return false;
}

export default { createUser, getUser, userExist }