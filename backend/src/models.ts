export class Helice {
    constructor(public cantidad: number) {}
}

export class Alas {
    constructor(public frontales: number, public traseras: number) {}
}

// Estas dos se usarán para COMPOSICIÓN
export class TrenAterrizaje {
    constructor(public tipo: string = "Retráctil") {}
}

export class Cubierta {
    constructor(public material: string = "Aluminio Reforzado") {}
}

export class Aeroplano {
    public id: number;
    private helice: Helice;           // AGREGACIÓN
    private alas: Alas;               // AGREGACIÓN
    private tren: TrenAterrizaje;     // COMPOSICIÓN (1)
    private cubierta: Cubierta;       // COMPOSICIÓN (2)

    constructor(id: number, helice: Helice, alas: Alas) {
        this.id = id;
        this.helice = helice;
        this.alas = alas;
        // Composición: el Aeroplano las crea internamente
        this.tren = new TrenAterrizaje();
        this.cubierta = new Cubierta();
    }

    public getDetalles() {
        return {
            id: this.id,
            helice: `${this.helice.cantidad} palas`,
            alas: `${this.alas.frontales} f / ${this.alas.traseras} t`,
            tren: this.tren.tipo,
            cubierta: this.cubierta.material
        };
    }
}