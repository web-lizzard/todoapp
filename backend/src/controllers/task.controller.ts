import { Request, Response } from 'express';

function showAllTasks(req: Request, res: Response) {
  res.json({ hello: 'hello' });
}

// const showAllTasks = (req: Request, res: Response) => {
//   console.log('this endpoint show all tasks');
//   res.json();
// };

export const taskController = {
  showAllTasks,
};
