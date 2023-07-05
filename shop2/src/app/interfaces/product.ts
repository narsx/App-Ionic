import { Category } from "./category"

export interface Product {
    id?:number
    name:String
    image:String
    category?:Category["id"]
    stock:number
}
