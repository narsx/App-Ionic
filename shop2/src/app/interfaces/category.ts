export interface Category {
    id?: number,
    name:String,
    image:String
}

export interface Subcategory{
    id?:number,
    name:String,
    idCategory?:Category["id"],
    image:String
}