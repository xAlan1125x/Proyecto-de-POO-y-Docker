export class Helice {
    constructor(public n: number) {}
}

export class Alas {
    constructor(public f: number, public c: number) {}
}

export class TrenAterrizaje {
    constructor(public tipo: string) {}
}

export class Cubierta {
    constructor(public material: string) {}
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
        // Estas dos se crean SIEMPRE adentro (Composición)
        this.tren = new TrenAterrizaje("Retráctil");
        this.cubierta = new Cubierta("Titanio");
    }

    public getInfo() {
        return {
            id: this.id,
            helice: this.helice.n,
            alas: `${this.alas.f}/${this.alas.c}`,
            tren: this.tren.tipo,
            cubierta: this.cubierta.material
        };
    }
}