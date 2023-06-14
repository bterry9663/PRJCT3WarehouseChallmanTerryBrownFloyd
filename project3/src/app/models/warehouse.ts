export class Warehouse {
    warehouseId: string = '';
     location: string = '';
     manager: string = '';
     max_capacity: number = 0;

    constructor(warehouseId: string,
                 location: string,
                 manager: string,
                 max_capacity: number
                ) {
        this.warehouseId = warehouseId;
        this.location = location;
        this.manager = manager;
        this.max_capacity = max_capacity;
    }
}
