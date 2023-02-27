"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoUpdate = void 0;
const db_server_1 = __importDefault(require("../../utils/db.server"));
const todoUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todoData = yield db_server_1.default.todo.findUnique({
        where: { id: Number(id) || undefined },
    });
    const updatedTodo = yield db_server_1.default.todo.update({
        where: { id: Number(id) || undefined },
        data: { title: req.body.title || undefined },
    });
    res.status(200).send('Todo updated successfully').json({ updatedTodo });
});
exports.todoUpdate = todoUpdate;