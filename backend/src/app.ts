import express from 'express';
import cors from 'cors';
import { Aeroplano, Helice, Alas } from './models';

const app = express();
app.use(express.json());
app.use(cors());

let aeroplanos: Aeroplano[] = [];
let idCounter = 1;

// CREATE
app.post('/aeroplanos', (req, res) => {
    const { numHelices, fAlas, cAlas } = req.body;
    const nuevo = new Aeroplano(idCounter++, new Helice(numHelices), new Alas(fAlas, cAlas));
    aeroplanos.push(nuevo);
    res.status(201).json(nuevo.getInfo());
});

// READ
app.get('/aeroplanos', (req, res) => {
    res.json(aeroplanos.map(a => a.getInfo()));
});

// DELETE
app.delete('/aeroplanos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    aeroplanos = aeroplanos.filter(a => a.id !== id);
    res.status(204).send();
});

app.listen(3000, () => console.log("Backend corriendo en puerto 3000"));