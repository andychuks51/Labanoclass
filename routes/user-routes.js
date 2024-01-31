import express from 'express';
const router = express.Router();

router.get('/user/courses/list', (req, res) => {
    res.send({ data: "User read product successfully"})
});

router.post('/user/courses/list', (req, res) => {
    res.send({ data: "User created product successfully"})
});

router.put('/user/courses/list', (req,res) => {
    res.send({ data: "User edited product successfully"})
});

router.delete('/user/courses/list', (req,res) => {
    res.send({data: "User deleted product successfully"})
});


export default router;