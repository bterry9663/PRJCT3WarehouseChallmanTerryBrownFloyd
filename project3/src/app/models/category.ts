export class Category {

    categoryId: number = 0;
    nomenclature: string = '';
    size: string = '';
    danger: string = '';

    constructor(categoryId: number,
                nomenclature: string,
                size: string,
                danger: string) {
        this.categoryId = categoryId;
        this.nomenclature = nomenclature;
        this.size = size;
        this.danger = danger;
}
}
