
export class Artifact {
    artifactId: number = 0;
    name: string = '';
    time_frame: string = '';
    origin: string = '';
    current_location: string = '';
    imageUrl: string = '';
    warehouse_id: number = 0;

    constructor(artifactId: number,
                name: string,
                time_frame: string,
                origin: string,
                current_location: string,
                imageUrl: string,
                warehouse_id: number) {
        this.artifactId = artifactId;
        this.name = name;
        this.time_frame = time_frame;
        this.origin = origin;
        this.current_location = current_location;
        this.imageUrl = imageUrl;
        this.warehouse_id = warehouse_id;
    }

}
