
export class Artifact {
    id: number = 0;
    name: string = '';
    timeFrame: string = '';
    origin: string = '';
    shelf: string = '';
    image: string = '';
    warehouseId: number = 0;

    constructor(id: number,
                name: string,
                timeFrame: string,
                origin: string,
                shelf: string,
                image: string,
                warehouseId: number) {
        this.id = id;
        this.name = name;
        this.timeFrame = timeFrame;
        this.origin = origin;
        this.shelf = shelf;
        this.image = image;
        this.warehouseId = warehouseId;
    }

}
