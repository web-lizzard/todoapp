import express from 'express';

import { taskController } from '../controllers/task.controller';

export const taskRouter = express.Router();

taskRouter.get('/all', taskController.showAllTasks);
