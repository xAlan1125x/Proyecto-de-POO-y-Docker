import express from 'express';
import cors from 'cors';
import { Aeroplano, Helice, Alas } from './models.js';

const app = express();
app.use(express.json());
app.use(cors());

let flota: Aeroplano[] = [];
let idAutoIncrement = 1;

// READ (Listar todos)
app.get('/aeroplanos', (req, res) => {
    res.json(flota.map(a => a.getDetalles()));
});

// CREATE (Crear uno nuevo)
app.post('/aeroplanos', (req, res) => {
    const { numHelices, fAlas, cAlas } = req.body;
    const nuevoAvion = new Aeroplano(
        idAutoIncrement++, 
        new Helice(numHelices), 
        new Alas(fAlas, cAlas)
    );
    flota.push(nuevoAvion);
    res.status(201).json(nuevoAvion.getDetalles());
});

// DELETE (Borrar) - Esto completa el CRUD
app.delete('/aeroplanos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const longitudInicial = flota.length;
    flota = flota.filter(a => a.id !== id);
    
    if (flota.length < longitudInicial) {
        res.status(200).send({ mensaje: "Eliminado" });
    } else {
        res.status(404).send({ mensaje: "No encontrado" });
    }
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));