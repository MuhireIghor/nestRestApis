import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()

export class ItemsService {
    private readonly items:Item[]=[
        {
            id:'a0681d1a441c58016bdb70424cf5ee6e',
            name:'Vodka',
            qty:12,
            description:'Beer one'

        },
        {
            id:'f224a1f0f8a5171cb6c09478caf50391',
            name:'Tekila',
            qty:12,
            description:'Beer Two'

        }
    ];
    findAll():Item[]{
        return this.items;
    }
    getOneById(id:string):Item{
        return this.items.find((item)=>item.id === id);
    }
}
