import * as mongoose from "mongoose";
import { ITask, taskSchema } from "./task-schema";
import { IUser, userSchema } from "./user-schema";

const Task = mongoose.model('Task', taskSchema);

const User = mongoose.model('User', userSchema);


export async function saveTask(task: ITask) {
    return Task.create(task);
}

export async function getTasks(userId: string) {
    return Task.find({ userId })
}
export async function getUsers() {
    return User.find({})
}
export async function makeAdmin(auth0_id: String, reqUserId: String) {
    const isReqAdmin = await User.exists({ auth0_id: reqUserId, isAdmin: true })
    if (isReqAdmin) {
        const newAdminUser = await User.updateOne({ auth0_id }, { isAdmin: true })
    }
}


export async function getUserInfo(userId: string, email: string) {
    const user = await User.exists({ auth0_id: userId })
    if (!user) {
        return User.create({ auth0_id: userId, isAdmin: false, email: email });
    }
    return User.find({ auth0_id: userId });
}

