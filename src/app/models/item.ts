export class Item {
    id?: number;
    code: string;
    name: string;
    sellingPrice: number;
    wholesalePrice: number; // Prix en gros
    purchasePrice: number;
    itemCategoryId: number;
    itemTypeId: number;
    minimumStock: number;
    initialQuantity: number;
    unitOfMeasure: string;
}
