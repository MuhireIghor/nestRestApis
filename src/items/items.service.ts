import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()

export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){}
    async findAll():Promise<Item[]>{
        return await this.itemModel.find();
    }
    async findOne(id:string):Promise<Item>{
        return await this.itemModel.findOne({_id:id});
    }
    async create(item:Item):Promise<Item>{
        const newItem = new this.itemModel(item);;
        return await newItem.save()
    }
    async deleteItem(id:string):Promise<Item>{
        return await this.itemModel.findByIdAndRemove(id);
    }
    async updateItem(id:string,item:Item):Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id,item,{new:true})
    }

}
// private readonly items:Item[]=[
//     {
//         id:'a0681d1a441c58016bdb70424cf5ee6e',
//         name:'Vodka',
//         qty:12,
//         description:'Beer one'

//     },
//     {
//         id:'f224a1f0f8a5171cb6c09478caf50391',
//         name:'Tekila',
//         qty:12,
//         description:'Beer Two'

//     }
// ];
// findAll():Item[]{
//     return this.items;
// }
// getOneById(id:string):Item{
//     return this.items.find((item)=>item.id === id);
// }
