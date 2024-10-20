import express, { Application, Request, Response, NextFunction } from "express"

const app: Application = express()
const port: Number = 9000

app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({
        "data" : "Heloo"
    })
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))