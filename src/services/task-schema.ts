import * as mongoose from "mongoose";

const { Schema } = mongoose;

export const taskSchema = new Schema({
    text: { type: String },
    description: { type: String },
    day: { type: Date, default: Date.now },
    userId: { type: String },
    priority: { type: String }
});


export interface ITask {
    _id?: String,
    text: string,
    description: String,
    day: Date,
    userId?: string,
    priority: String
}
