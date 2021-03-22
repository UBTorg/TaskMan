import * as mongoose from "mongoose";

const { Schema } = mongoose;

export const taskSchema = new Schema({
    text: String,
    date: { type: Date, default: Date.now },
    userId: String,
});


export interface ITask {
    text: string,
    date: Date,
    userId?: string
}
