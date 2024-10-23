import express, { Application } from "express"
import routes from "./routes"

const app: Application = express()
const port: Number = 9000

app.use(routes)

app.listen(port, () => console.log(`Server is listening on port ${port}`))