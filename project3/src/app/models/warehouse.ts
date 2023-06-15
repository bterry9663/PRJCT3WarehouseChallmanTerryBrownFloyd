export class Warehouse {
    warehouseId: string = '';
     location: string = '';
     manager: string = '';
     max: number = 0;

    constructor(warehouseId: string,
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
