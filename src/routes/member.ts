import { Request, Response, Router } from "express";

const member = Router()

member.get('/members', (req: Request, res: Response) => {
    res.status(200).json({
        "message": "Sucessfully get all members",
        "data": []
    })
})

export default member