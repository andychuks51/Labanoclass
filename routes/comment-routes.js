import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ data: "User read comments successfully"})
});

router.post("/", (req, res) => {
    res.send({ data: "User created comment successfully"})
});

router.put("/", (req,res) => {
    res.send({ data: "User edited comments successfully"})
});

router.delete("/", (req,res) => {
    res.send({data: "User deleted comments successfully"})
});


export default router;