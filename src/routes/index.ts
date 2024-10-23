import { Router } from "express";
import member from "./member";

const routes = Router()

routes.use("/api", member)

export default routes