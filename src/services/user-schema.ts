import * as mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = new Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    auth0_id: String,
    email: String
});


export interface IUser {
    isAdmin: Boolean,
    auth0_id: String,
    email: String
}
