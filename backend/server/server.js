import express, { Request, Response } from "express";
import session from "express-session";

const app = express();
const port = 3001;

// ЗАПУСК СЕРВЕРА
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
