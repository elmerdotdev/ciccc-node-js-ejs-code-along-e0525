import { Router, Request, Response } from 'express'
import { Todo } from '../types/todo'
import { v4 as uuidv4 } from 'uuid'

const todoRouter = Router()

// In-memory database
const todos: Todo[] = [
  { id: uuidv4(), task: 'Wash laundry', completed: false }
]

/**
 * To Dos page
 * 
 * @route GET /todos
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with To Dos page.
 */
todoRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('todos', {
    title: "To Dos",
    todos
  })
})

/**
 * Add new todo
 * 
 * @route POST /todos/add
 * @param { Request } req - Express request object with new task.
 * @param { Response } res - Express response object. 
 * @returns { void } - Responds with new task object.
 */
todoRouter.post('/add', (
  req: Request<{}, {}, Omit<Todo, 'id'>>,
  res: Response
) => {
  const { task } = req.body
  const newTodo: Todo = {
    id: uuidv4(),
    task,
    completed: false
  }
  todos.push(newTodo)
  res.status(301).redirect('/todos')
})

/**
 * Update todo
 * 
 * @route PUT /todos/update
 * @param { Request } req - Express request object which contains id.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with success.
 */
todoRouter.put('/update/:id', (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params
  const foundIndex = todos.findIndex(t => t.id === id)
  if (foundIndex === -1) {
    res.status(404).json({ success: false })
    return
  }
  todos[foundIndex] = {
    ...todos[foundIndex],
    completed: !todos[foundIndex].completed
  }
  res.status(201).json({ success: true })
})

/**
 * Delete todo
 * 
 * @route DELETE /todos/delete
 * @param { Request } req = Express request object with id param.
 * @param { Response } res = Express response object.
 * @returns { void } = Responds with success or not.
 */
todoRouter.delete('/delete/:id', (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params
  const foundIndex = todos.findIndex(t => t.id === id)
  if (foundIndex === -1) {
    res.status(404).json({ success: false })
    return
  }
  todos.splice(foundIndex, 1)
  res.status(200).json({ success: true })
})

export default todoRouter