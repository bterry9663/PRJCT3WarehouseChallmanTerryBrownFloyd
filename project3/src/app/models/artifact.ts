
export class Artifact {
    artifactId: number = 0;
    name: string = '';
    time_frame: string = '';
    origin: string = '';
    current_location: string = '';
    imageUrl: string = '';
    warehouseId: string = '';

    constructor(artifactId: number,
                name: string,
                time_frame: string,
                origin: string,
                current_location: string,
                imageUrl: string,
                warehouseId: string) {
        this.artifactId = artifactId;
        this.name = name;
        this.time_frame = time_frame;
        this.origin = origin;
        this.current_location = current_location;
        this.imageUrl = imageUrl;
        this.warehouseId = warehouseId;
    }

}
