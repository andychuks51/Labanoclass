import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: "User read data successfully"})
});

router.post('/', (req, res) => {
    res.send({ data: "User created a new data successfully"})
});

router.put('/', (req,res) => {
    res.send({ data: "User edited their data successfully"})
});

router.delete('/', (req,res) => {
    res.send({data: "User deleted their product successfully"})
});


export default router;