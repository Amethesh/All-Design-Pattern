// Product class
export class House {
    private windows: number;
    private doors: number;
    private roof: boolean;

    constructor() {
        this.windows = 0;
        this.doors = 0;
        this.roof = false;
    }

    public setWindows(windows: number): void {
        this.windows = windows;
    }

    public setDoors(doors: number): void {
        this.doors = doors;
    }

    public setRoof(roof: boolean): void {
        this.roof = roof;
    }

    public show(): void {
        console.log(`House with ${this.windows} windows, ${this.doors} doors and ${this.roof ? "a roof" : "no roof"}`);
    }
}
