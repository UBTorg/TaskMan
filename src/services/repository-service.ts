import * as mongoose from "mongoose";
import { ITask, taskSchema } from "./task-schema";
import { userSchema } from "./user-schema";

const Task = mongoose.model('Task', taskSchema);

const User = mongoose.model('User', userSchema);


export async function saveTask(task: ITask) {
    return Task.create(task);
}

export async function getTasks(userId: string) {
    return Task.find({ userId })
}

export async function getUserInfo(userId: string) {
    console.log(userId)
    const user = await User.exists({ auth0_id: userId })
    console.log(user)
    if (!user) {
        return User.create({ auth0_id: userId, isAdmin: false });
    }
    console.log("test2")
    return User.find({ auth0_id: userId });
}

