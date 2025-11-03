"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const todoRouter = (0, express_1.Router)();
// In-memory database
const todos = [
    { id: (0, uuid_1.v4)(), task: 'Wash laundry', completed: false }
];
/**
 * To Dos page
 *
 * @route GET /todos
 * @param { Request } req - Express request object.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with To Dos page.
 */
todoRouter.get('/', (req, res) => {
    res.status(200).render('todos', {
        title: "To Dos",
        todos
    });
});
/**
 * Add new todo
 *
 * @route POST /todos/add
 * @param { Request } req - Express request object with new task.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with new task object.
 */
todoRouter.post('/add', (req, res) => {
    const { task } = req.body;
    const newTodo = {
        id: (0, uuid_1.v4)(),
        task,
        completed: false
    };
    todos.push(newTodo);
    res.status(301).redirect('/todos');
});
/**
 * Update todo
 *
 * @route PUT /todos/update
 * @param { Request } req - Express request object which contains id.
 * @param { Response } res - Express response object.
 * @returns { void } - Responds with success.
 */
todoRouter.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const foundIndex = todos.findIndex(t => t.id === id);
    if (foundIndex === -1) {
        res.status(404).json({ success: false });
        return;
    }
    todos[foundIndex] = Object.assign(Object.assign({}, todos[foundIndex]), { completed: !todos[foundIndex].completed });
    res.status(201).json({ success: true });
});
/**
 * Delete todo
 *
 * @route DELETE /todos/delete
 * @param { Request } req = Express request object with id param.
 * @param { Response } res = Express response object.
 * @returns { void } = Responds with success or not.
 */
todoRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const foundIndex = todos.findIndex(t => t.id === id);
    if (foundIndex === -1) {
        res.status(404).json({ success: false });
        return;
    }
    todos.splice(foundIndex, 1);
    res.status(200).json({ success: true });
});
exports.default = todoRouter;
