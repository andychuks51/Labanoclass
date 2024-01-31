import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: "User read product successfully"})
});

router.post('/', (req, res) => {
    res.send({ data: "User created product successfully"})
});

router.put('/', (req,res) => {
    res.send({ data: "User edited product successfully"})
});

router.delete('/', (req,res) => {
    res.send({data: "User deleted product successfully"})
});


export default router;