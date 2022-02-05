import { EntityState } from '@ngrx/entity';


export interface ItemModel {
    id?: number;
    category: string;
    imgSrc: string;
    price: number;
    title: string;
}


export interface ItemsState {
    readonly data: ItemModel[];
    readonly loading: boolean;
}


export interface CartItemModel extends ItemModel {
    count: number;
}


export interface CartState extends EntityState<CartItemModel> {
    readonly loaded: boolean;
    readonly loading: boolean;
}


export const API = "https://api.debugger.pl/"
