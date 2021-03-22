import { Router } from "express";
import {ITask} from "../../services/task-schema";
import {getTasks, saveTask} from "../../services/repository-service";

const router = Router();

router.get("/tasks", async (req, res) => {
    const userId = req.user.sub;
    return res.send({
        "tasks": await getTasks(userId)
    })
});


router.post<any,any,ITask>("/tasks", async (req, res) => {
    const task = req.body;
    const userId = req.user.sub;
    const newTask = {...task, ...{userId: userId}};
    const result = await saveTask(newTask);
    res.send(result);
});

export default router;
