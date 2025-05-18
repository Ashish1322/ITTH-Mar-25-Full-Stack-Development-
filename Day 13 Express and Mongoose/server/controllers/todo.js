import todoCollection from "../models/todo.js";

const getAllTodos = (req, res) => {
  todoCollection
    .find()
    .then((result) => {
      return res.status(200).json({ todos: result });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err: err });
    });
};

const createTodo = (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  todoCollection
    .create({ title: title, description: description })
    .then((result) => {
      return res.status(201).json({ message: "Todo has been created" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err: err });
    });
};

const removeTodo = (req, res) => {
  const { id } = req.params;
  todoCollection
    .findByIdAndDelete(id)
    .then((result) => {
      return res.status(200).json({ message: "Todo has been deleted" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err: err });
    });
};

const markTodoAsCompleted = (req, res) => {
  const { id } = req.params;
  todoCollection
    .findOneAndUpdate({ _id: id }, { completed: true })
    .then((result) => {
      return res.status(200).json({ todo: result });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ err: err });
    });
};

export { getAllTodos, createTodo, removeTodo, markTodoAsCompleted };
