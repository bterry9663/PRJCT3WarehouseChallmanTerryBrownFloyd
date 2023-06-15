
export class Artifact {
    itemId: number = 0;
    name: string = '';
    timeFrame: string = '';
    origin: string = '';
    shelf: string = '';
    image: string = '';
    warehouseId: number = 0;

    constructor(itemId: number,
                name: string,
                timeFrame: string,
                origin: string,
                shelf: string,
                image: string,
                warehouseId: number) {
        this.itemId = itemId;
        this.name = name;
        this.timeFrame = timeFrame;
        this.origin = origin;
        this.shelf = shelf;
        this.image = image;
        this.warehouseId = warehouseId;
    }

}
