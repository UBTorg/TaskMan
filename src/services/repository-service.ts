import * as mongoose from "mongoose";
import {ITask, taskSchema} from "./task-schema";

const Task = mongoose.model('Task', taskSchema);


export async function saveTask(task: ITask) {
    return Task.create(task);
}

export async function getTasks(userId: string) {
    return Task.find({userId})
}

