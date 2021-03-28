import { Router } from "express";
import { ITask } from "../../services/task-schema";
import { getTasks, deleteTask, saveTask, getUserInfo, getUsers, makeAdmin } from "../../services/repository-service";

const router = Router();

router.get("/tasks", async (req, res) => {
    const userId = req.user.sub;
    return res.send({
        "tasks": await getTasks(userId)
    })
});

router.delete("/tasks/:taskId", async (req, res) => {
    const userId = req.user.sub;
    return res.send({
        "tasks": await deleteTask(req.params.taskId)
    })

});

router.get("/users", async (req, res) => {
    const userId = req.user.sub;
    return res.send({
        "users": await getUsers()
    })
});
router.put("/users/:userid/make-admin", async (req, res) => {
    const reqUserId = req.user.sub;
    const newAdminUserId = req.params.userid;
    await makeAdmin(newAdminUserId, reqUserId)
    return res.send({
    })
});

router.get("/user-info", async (req, res) => {
    try {
        const userId = req.user.sub;
        const email = req.user['https://taskman.com/email']
        return res.send(await getUserInfo(userId, email))
    }
    catch (e) {
        console.log(e)
    }
});



router.post<any, any, ITask>("/tasks", async (req, res) => {
    const task = req.body;
    const userId = req.user.sub;
    const newTask = { ...task, ...{ userId: userId } };
    const result = await saveTask(newTask);
    res.send(result);
});


export default router;
