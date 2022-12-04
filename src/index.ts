import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import openapiDocument from "./docs/openapi";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiDocument));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
