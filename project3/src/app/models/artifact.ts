import { Category } from "./category";

export class Artifact {
    artifactId: number = 0;
    name: string = '';
    category: Category = new Category(0,'', '', '');
    time_frame: string = '';
    origin: string = '';
    current_location: string = '';
    imageUrl: string = '';

    constructor(artifactId: number,
                name: string,
                category: Category,
                time_frame: string,
                origin: string,
                current_location: string,
                imageUrl: string) {
        this.artifactId = artifactId;
        this.name = name;
        this.category = category;
        this.time_frame = time_frame;
        this.origin = origin;
        this.current_location = current_location;
        this.imageUrl = imageUrl;
    }

}
