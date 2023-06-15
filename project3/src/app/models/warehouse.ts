export class Warehouse {
    warehouseId: number = 0;
     location: string = '';
     manager: string = '';
     max: number = 0;

    constructor(warehouseId: number,
                 location: string,
                 manager: string,
                 max: number
                ) {
        this.warehouseId = warehouseId;
        this.location = location;
        this.manager = manager;
        this.max = max;
    }
}
